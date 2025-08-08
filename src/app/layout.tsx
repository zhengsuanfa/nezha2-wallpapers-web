import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "哪吒2壁纸宇宙 - 官方壁纸下载平台",
  description: "《哪吒2》电影官方壁纸下载平台，提供高清壁纸、角色纪念、AI头像生成等服务。",
  authors: [{ name: "哪吒2壁纸宇宙" }],
  keywords: ["哪吒2", "壁纸", "下载", "角色", "电影", "官方"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
