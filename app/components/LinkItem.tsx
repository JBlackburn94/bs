import Link from "next/link";
import React from "react";

interface LinkItemProps {
  href: string;
  content: string;
  target?: boolean;
}

export default function LinkItem({ href, content }: LinkItemProps) {
  return (
    <li className="text-lg">
      <Link href={href} target="_blank">
        {content}
      </Link>
    </li>
  );
}
