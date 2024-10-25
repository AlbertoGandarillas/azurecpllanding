import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
  settings: {
    Website: string;
    Email: string;
    PhoneNumber: string;
    CompBackgroundColor: string;
    CompFontColor: string;
  };
}

export default function ContactCard({ settings }: ContactCardProps) {
  return (
    <>
        <div className="flex items-center space-x-4 pb-3">
          <Globe />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {settings.Website && (
                <Link
                  target="_blank"
                  href={
                    settings.Website.startsWith("http")
                      ? settings.Website
                      : `http://${settings.Website}`
                  }
                >
                  {settings.Website}
                </Link>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 pb-3">
          <Mail />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              <Link href={`mailto:${settings.Email}`}>{settings.Email}</Link>
            </p>
          </div>
        </div>
    </>
  );
}
