"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[2078],{86117:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var i,s=t(87462),a=t(63366),o=(t(15007),t(64983)),m=t(91515),r=["components"],l={},p=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),d={_frontmatter:l},c=m.Z;function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.mdx)(c,(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"sensitive-and-environment-specific-settings"},"Sensitive and environment-specific settings"),(0,o.mdx)("p",null,"This topic discusses how third-party developers can create components that designate configuration settings as being sensitive, environment-specific, or both."),(0,o.mdx)("h2",{id:"guidelines"},"Guidelines"),(0,o.mdx)("p",null,"Use the following guidelines to determine which settings to designate as sensitive, system-specific, or both."),(0,o.mdx)("p",null,"Adobe Commerce and Magento Open Source store these settings in ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Application root dir>/app/etc/env.php"),".\nDo not include this file in source control."),(0,o.mdx)("h3",{id:"sensitive-values"},"Sensitive values"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Sensitive")," configuration values hold restricted or confidential information."),(0,o.mdx)("p",null,"Examples of sensitive information include:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Keys (such as API keys)"),(0,o.mdx)("li",{parentName:"ul"},"Usernames and passwords"),(0,o.mdx)("li",{parentName:"ul"},"E-mail addresses"),(0,o.mdx)("li",{parentName:"ul"},"Any personally identifiable information (e.g., address, phone number, date of birth, government identification number, etc.)")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data."),(0,o.mdx)("h3",{id:"environment-or-system-specific-values"},"Environment or system-specific values"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Environment")," or ",(0,o.mdx)("em",{parentName:"p"},"system-specific")," values are unique to the system where the application is deployed."),(0,o.mdx)("p",null,"Examples of environment or system-specific values include:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"URLs"),(0,o.mdx)("li",{parentName:"ul"},"IP addresses"),(0,o.mdx)("li",{parentName:"ul"},"Ports"),(0,o.mdx)("li",{parentName:"ul"},"Hostnames"),(0,o.mdx)("li",{parentName:"ul"},"Domain names"),(0,o.mdx)("li",{parentName:"ul"},"Paths (e.g., custom paths, proxy host, proxy port)"),(0,o.mdx)("li",{parentName:"ul"},'"modes" (e.g, sandbox mode, debug mode, test mode)'),(0,o.mdx)("li",{parentName:"ul"},"SSL (only for non-payment)"),(0,o.mdx)("li",{parentName:"ul"},"E-mail recipients"),(0,o.mdx)("li",{parentName:"ul"},"Administrative settings between systems (e.g., password expiration limits)")),(0,o.mdx)("h2",{id:"how-to-specify-values-as-sensitive-or-system-specific"},"How to specify values as sensitive or system-specific"),(0,o.mdx)("p",null,"Add a reference to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Config/Model/Config/TypePool.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento\\Config\\Model\\Config\\TypePool"))," to the ",(0,o.mdx)("a",{parentName:"p",href:"../build/dependency-injection-file.md"},(0,o.mdx)("inlineCode",{parentName:"a"},"di.xml"))," file to specify either a system-specific or sensitive configuration value."),(0,o.mdx)("h3",{id:"example-sensitive-settings"},"Example: Sensitive settings"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Config\\Model\\Config\\TypePool">\n   <arguments>\n      <argument name="sensitive" xsi:type="array">\n         <item name="payment/test/password" xsi:type="string">1</item>\n      </argument>\n   </arguments>\n</type>\n')),(0,o.mdx)("p",null,"After specifying the sensitive setting, use the following commands to verify it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento app:config:dump\n")),(0,o.mdx)("p",null,"A message similar to the following is displayed:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"The configuration file doesn't contain sensitive data for security reasons. Sensitive data can be stored in the following environment variables:\nCONFIG__DEFAULT__PAYMENT__TEST__PASWORD for payment/test/password\nDone.\n")),(0,o.mdx)("h3",{id:"example-system-specific-settings"},"Example: System-specific settings"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Config\\Model\\Config\\TypePool">\n   <arguments>\n      <argument name="environment" xsi:type="array">\n         <item name="catalog/search/searchengine/port" xsi:type="string">1</item>\n      </argument>\n   </arguments>\n</type>\n')),(0,o.mdx)("h3",{id:"sensitive-system-specific-setting"},"Sensitive, system-specific setting"),(0,o.mdx)("p",null,"To set a configuration setting as both sensitive and system-specific, create two entries with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," property for ",(0,o.mdx)("inlineCode",{parentName:"p"},"argument")," set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"sensitive")," for one entry and ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment")," for the other."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-configuration-sensitive-environment-settings-md-7e957e94efbfcca23367.js.map