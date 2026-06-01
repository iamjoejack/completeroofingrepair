"use client";

import { useEffect } from "react";

/* ============================================================================
   AI AGENT: chat widget mount point
   ----------------------------------------------------------------------------
   Loads thebestcrm's chat/answering-agent widget. It connects this site's
   visitors to your CRM's unified inbox + chat agent. Configure via .env.local:
       NEXT_PUBLIC_CRM_BASE_URL          = your thebestcrm deployment URL
       NEXT_PUBLIC_CRM_CHAT_WIDGET_SLUG  = complete-roofing
   If either is unset, nothing loads (safe no-op during local dev).
   ============================================================================ */
export function ChatWidget() {
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CRM_BASE_URL;
    const slug = process.env.NEXT_PUBLIC_CRM_CHAT_WIDGET_SLUG;
    if (!base || !slug) return;
    if (document.getElementById("crm-chat-embed")) return;

    const s = document.createElement("script");
    s.id = "crm-chat-embed";
    s.async = true;
    s.src = `${base.replace(/\/$/, "")}/api/chat/${slug}/embed.js`;
    document.body.appendChild(s);
  }, []);

  return <div id="chat-widget-root" />;
}
