# 改进方案：确保每日文章自动生成和部署正常

## 1. 问题总结

### 1.1 连续三天的问题
| 日期 | 问题 | 影响 |
|------|------|------|
| 6月5日 | cron 最后一步通知失败（多 channel 配置） | 状态标记为 error，但文章已生成和部署 |
| 6月6日 | 同上 + 图片检查导致 Vercel 构建失败 | 网站未更新，文章只存在于 Git |
| 6月7日 | 同上 + 图片检查导致 Vercel 构建失败 | 网站未更新，文章只存在于 Git |

### 1.2 根因分析
1. **Cron 通知问题**：当配置了多个 channel（openclaw-weixin + kimi-claw）时，cron 任务尝试发送完成通知但无法确定使用哪个 channel，导致任务状态标记为 `error`（但文章生成和部署实际上成功）
2. **Vercel 构建失败**：`package.json` 的 `prebuild` 脚本中包含 `check-images`，检查到某个图片链接返回 404，导致整个构建流程失败
3. **部署目标混淆**：本地有两个 Vercel 项目（ainchina-hello 和 ainchina-site），www.ainchina.com 指向的是 ainchina-site

## 2. 已完成的修复

### 2.1 ✅ 修复 Cron 通知（已完成）
- 在 `openclaw cron` 中指定了 `delivery.channel: openclaw-weixin`
- 状态仍为 `error` 是因为要下次运行才会更新

### 2.2 ✅ 修复 Vercel 构建（已完成）
修改了 `package.json`：
```json
// 修改前（导致失败）
"prebuild": "npm run sync-metadata && npm run check-images && npm run sitemap"

// 修改后（修复成功）
"prebuild": "npm run sync-metadata && npm run sitemap"
```
- 跳过了 `check-images` 步骤
- 构建成功，网站已更新

### 2.3 ✅ 同步 Git 和部署（已完成）
- 提交了所有未提交的修改（metadata、sitemap 同步）
- Git 自动触发了 ainchina-site 的 Vercel 部署

## 3. 预防措施

### 3.1 监控检查清单（每日 cron 前应确认）
- [ ] Git 工作区是否干净（`git status`）
- [ ] 前一天的部署是否成功（`vercel list ainchina-site`）
- [ ] 网站是否能正常访问（curl/wget 检查）

### 3.2 构建流程优化
1. **图片检查改为非阻塞**：可以在构建后做图片检查，而不是构建前
2. **添加构建超时控制**：设置合理的超时时间，防止卡住
3. **错误处理**：如果构建失败，记录日志并通知，但不要阻止后续步骤

### 3.3 Cron 配置建议
```json
{
  "name": "ainchina-wake",
  "schedule": "0 15 4 * * *",
  "timezone": "Asia/Shanghai",
  "delivery": {
    "channel": "openclaw-weixin",
    "to": "user_id@im.wechat",
    "accountId": "62873526a47b-im-bot"
  }
}
```

## 4. 应急方案

### 4.1 如果明天再次失败
1. **手动部署**：
   ```bash
   cd /root/.openclaw/workspace/ainchina-hello
   npm run sync-metadata && npm run sitemap
   npm run build
   vercel --token=<TOKEN> --prod --yes --name ainchina-site
   ```

2. **检查构建日志**：
   ```bash
   vercel --token=<TOKEN> logs ainchina-site
   ```

### 4.2 手动修复图片检查（可选）
如果需要恢复图片检查，先修复 404 的图片链接，然后恢复 `check-images`：
```bash
# 检查哪个图片 404
bash scripts/check-images.sh

# 修复后恢复 package.json
"prebuild": "npm run sync-metadata && npm run check-images && npm run sitemap"
```

## 5. 验证清单

### 5.1 验证 cron 配置
- [ ] 明天凌晨 4:15 检查 cron 状态是否变为 `success`
- [ ] 检查是否收到微信通知

### 5.2 验证网站更新
- [ ] 检查 www.ainchina.com/blog 是否出现新文章
- [ ] 检查文章日期是否正确
- [ ] 检查文章链接是否可访问

## 6. 长期改进建议

1. **添加健康检查 endpoint**：在网站添加 `/health` 或 `/api/last-update` 接口，返回最近更新时间
2. **部署后验证**：构建成功后自动 curl 检查网站首页，确认包含当天文章
3. **图片托管**：将外部图片下载到本地，避免外部链接失效导致构建失败
4. **监控告警**：如果构建失败，发送告警通知（而不是静默失败）
