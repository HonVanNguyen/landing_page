import { Text } from "@/components/ui/text";
import { siteConfig } from "@/configs/site.config";

const Copyright = () => {
  return (
    <div className="flex w-full items-center justify-start">
      <Text as="p" size="sm">
        {siteConfig.copyright}
      </Text>
    </div>
  );
};

export default Copyright;
