import { Text } from "@/components/ui/text";
import { siteConfig } from "@/configs/site.config";

const CompanyInformation = () => {
  return (
    <div className="flex flex-col gap-3">
      <Text as="h3" size="md" className="uppercase font-bold">
        {siteConfig.companyInfo.name}
      </Text>
      <Text as="h4" size="sm">
       Địa chỉ: {siteConfig.companyInfo.address}
      </Text>
    </div>
  );
};

export default CompanyInformation;
