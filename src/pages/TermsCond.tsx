import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import BackNavigation from "../components/BackNavigation";
import Footer from "../components/Footer";

export default function TermsCond() {
  return (
    <Container
      maxW={"100%"}
      p="0"
      background="#111111"
      overflow={"hidden"}
      textAlign="justify"
    >
      <BackNavigation heading="Terms and Conditions" />

      <Flex
        direction={"column"}
        mt={16}
        mb={10}
        p={[6, 6, 8, 28]}
        alignItems="flex-start"
      >
        <Text my={2} color="whiteAlpha.800">
          ZillOut Social Pvt Ltd. owns ZillOut, a mobile app and website
          (www.ZillOut.com). The Company has endeavored to ensure that all
          information on the App/Website is accurate, however, it cannot in any
          manner guarantee the quality, accuracy, or completeness of the data or
          information contained therein. The App/Website and/or its contents are
          offered "as-is", without warranty of any type, and ZillOut makes no
          representations or warranties, either express or implied, regarding
          the App/Website and/or its contents, including any liability,
          responsibility, or any other claim concerning any loss, whether direct
          or consequential, to users or anyone else, caused by or resulting from
          the information contained in the App/Website.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          Because ZillOut acts exclusively as a booking agent, it cannot be held
          responsible for any of the arrangements that may take place between
          the service provider and the user, including the standard of services
          provided by the service providers. ZillOut shall under no
          circumstances be liable for any services provided by the service
          provider.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          If ZillOut deems it necessary due to an internal reason, it may cancel
          tickets booked through its platform. Despite the fact that ZillOut
          takes reasonable commercial efforts to ensure the information in the
          Terms of Service and on each page of the App/Website is accurate, it
          does not accept responsibility for changes that occurred as a result
          of human error or that resulted in damages or losses to any person or
          entity who relied on the information. No responsibility is taken by
          ZillOut for the accuracy of any information conveyed in any digital
          format such as content, photos, infographics, videos, and GIFs on the
          App/Website/app regarding any activity or event listed on the
          App/Website. The organizer/venue takes due responsibility for
          obtaining all necessary approvals, permissions, licenses,
          no-objections, clearances, etc. From the relevant governmental/private
          bodies/authorities as may be required to hold the event/activity in
          accordance with law and availing the services. In case of failing to
          do so, the venue/organizer will be liable to compensate for the
          damages and will be subjected to punitive measures if required.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          Also, ZillOut is not the service provider and cannot, therefore,
          control or prevent changes in the published descriptions which are
          based upon information provided by the service provider.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          All payment gateway/method-related offers (including wallets such as
          Mobikwik, PayTM, PayPal, etc.) will be subjected to the terms and
          conditions of that particular payment gateway. ZillOut, in the best of
          its efforts, will provide the terms and conditions on the payment page
          where such offers are displayed, but will not take any guarantee of
          such offers. The liability of such offers will be on the payment
          gateway itself, and all queries regarding such offers (including but
          not limited to getting the full list of terms and conditions, cashback
          not credited query, etc.) will be addressed by the payment gateway.
          ZillOut will not entertain any refund/cancellation request in case of
          any issues related to the payment gateway/method offer.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          In rare cases, payment may be deducted from your bank account but the
          tickets won't be issued to you if your bank has kept the payment in
          pending status and hasn't released it to us. In such cases, if your
          bank approves the payment, tickets will be issued to you, or else your
          bank will refund the amount to your bank account according to its
          refund cycle. For an update on the status of your payment in such
          cases, you can contact our customer care.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          ZillOut does not endorse any advertiser on its App/Website in any
          manner. The users are requested to verify the accuracy of all
          information on their own before undertaking any reliance on such
          information.
        </Text>
        <Text my={2} color="whiteAlpha.800">
          In no event shall ZillOut be liable for any direct, indirect,
          punitive, incidental, special, consequential damages or any other
          damages resulting from (a) the use or the inability to use the
          services; (b) the cost of procurement of substitute goods and services
          or resulting from any goods, information or services purchased or
          obtained or messages received or transactions entered into through the
          services; (c) unauthorized access to or alteration of the user's
          transmissions or data; (d) any other matter relating to the services;
          including, without limitation, damages for loss of use, data or
          profits, arising out of or in any way connected with the use or
          performance of the App/Website. Neither shall ZillOut be responsible
          for the delay or inability to use the App/Website or related services,
          the provision of or failure to provide services, or for any
          information, software, products, services, and related graphics
          obtained through the App/Website, or otherwise arising out of the use
          of the App/Website, whether based on contract, tort, negligence,
          strict liability or otherwise. further, ZillOut shall not be held
          responsible for non-availability of the App/Website during periodic
          maintenance operations or any unplanned suspension of access to the
          App/Website that may occur due to technical reasons or for any reason
          beyond ZillOut's control. the user understands and agrees that any
          material and/or data downloaded or otherwise obtained through the
          App/Website is done entirely at their own discretion and risk and they
          will be solely responsible for any damage to their computer systems or
          loss of data that results from the download of such material and/or
          data. These limitations, disclaimer of warranties and exclusions apply
          without regard to whether the damages arise from (a) breach of
          contract, (b) breach of warranty, (c) negligence, or (d) any other
          cause of action, to the extent such exclusion and limitations are not
          prohibited by applicable law. The maximum liability on part of ZillOut
          arising under any circumstances, in respect of any services offered on
          the site, shall be limited to the refund of the total amount received
          from the customer for availing the services less any cancellation,
          refund, or others charges, as may be applicable. In no case, the
          liability shall include any consequential loss, damage, or additional
          expense whatsoever.
        </Text>

        <Heading as="h3" size="lg" color={"white"} mt={6}>
          Acceptance of terms
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          Thank you for using ZillOut. These Terms of Service (the "Terms") are
          intended to make you aware of your legal rights and responsibilities
          with respect to your access to and use of the ZillOut App/Website at
          www.ZillOut.com (the "Site") and any related mobile or software
          applications ("ZillOut Platform") including but not limited to
          delivery of information via the App/Website whether existing now or in
          the future that link to the Terms (collectively, the "Services").
          These Terms are effective for all existing and future ZillOut
          customers, including but without limitation to users having access to
          the 'location business page' to manage their claimed business
          listings. Please read these Terms carefully. By accessing or using the
          ZillOut Platform, you are agreeing to these Terms and concluding a
          legally binding contract with ZillOut Social Pvt Ltd. .
        </Text>
        <Text my={2} color="whiteAlpha.800">
          In order to use the Services, you must first agree to the Terms. You
          can accept the Terms by:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>
            Clicking to accept or agree to the Terms, where it is made available
            to you by ZillOut in the user interface for any particular Service;
            or
          </ListItem>
          <ListItem>
            Actually using the Services. In this case, you understand and agree
            that ZillOut will treat your use of the Services as acceptance of
            the Terms from that point onwards.
          </ListItem>
        </UnorderedList>
        <Heading as="h3" size="lg" color={"white"} mt={8} mb={2}>
          Definitions
        </Heading>
        <Heading as="h4" size="md" color={"white"} mt={2}>
          Customer
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          <strong>"Customer"</strong> or <strong>"You"</strong> or
          <strong> "Your"</strong> refers to you, as a customer of the Services.
          A customer is someone who accesses or uses the Services for the
          purpose of sharing, displaying, hosting, publishing, transacting, or
          uploading information or views or pictures and includes other persons
          jointly participating in using the Services including without
          limitation a user having access to 'Merchant app' to manage claimed
          business listings or otherwise.
        </Text>
        <Heading as="h4" size="md" color={"white"} mt={2}>
          Customer
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          <strong>"Content"</strong> will include (but is not limited to)
          reviews, images, photos, audio, video, location data, nearby places,
          drinks name, location tags, event details, offers, and all other forms
          of information or data. <strong>"Your Content"</strong> or{" "}
          <strong>"Customer Content"</strong> means content that you upload,
          share or transmit to, through or in connection with the Services, such
          as likes, ratings, reviews, images, photos, messages, profile
          information, and any other materials that you publicly display or
          displayed in your account profile. "ZillOut Content" means content
          that ZillOut creates and make available in connection with the
          Services including, but not limited to, visual interfaces, interactive
          features, graphics, design, compilation, computer code, products,
          software, aggregate ratings, reports, and other usage-related data in
          connection with activities associated with your account and all other
          elements and components of the Services excluding Your Content and
          Third Party Content. "Third Party Content" means content that comes
          from parties other than ZillOut or its Customers and is available on
          the Services.
        </Text>
        <Heading as="h4" size="md" color={"white"} mt={2}>
          Location(s)
        </Heading>
        <Text my={2} color="whiteAlpha.800">
          <strong>“Location"</strong> means the Pub, Bar, Brewery, Night Club
          listed on ZillOut and any related mobile or software applications of
          ZillOut.
        </Text>

        <Heading as="h3" size="lg" color={"white"} mt={8} mb={4}>
          Eligibility to use the services
        </Heading>
        <OrderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>
            You hereby represent and warrant that you are at least eighteen (18)
            years of age or above and are fully able and competent to understand
            and agree to the terms, conditions, obligations, affirmations,
            representations, and warranties set forth in these Terms.
          </ListItem>
          <ListItem>
            Compliance with Laws. You are in compliance with all laws and
            regulations in the country in which you live when you access and use
            the Services. You agree to use the Services only in compliance with
            these Terms and applicable law, and in a manner that does not
            violate our legal rights or those of any third party(ies).
          </ListItem>
        </OrderedList>
        <Heading as="h3" size="lg" color={"white"} mt={8} mb={4}>
          Changes to the terms
        </Heading>
        <Text color="whiteAlpha.800">
          ZillOut may vary or amend or change or update these Terms, from time
          to time entirely at its own discretion. You shall be responsible for
          checking these Terms and Conditions from time to time, ensuring
          continued compliance with these Terms. Your use of ZillOut Platform
          after any such amendment or change in the Terms shall be deemed as
          your express acceptance to such amended/changed terms and you also
          agree to be bound by such changed/amended Terms.
        </Text>
        <Heading as="h3" size="lg" color={"white"} mt={8} mb={4}>
          Provision of the services being offered by ZillOut
        </Heading>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6} spacing={1}>
          <ListItem>
            ZillOut is constantly evolving in order to provide the best possible
            experience and information to its Customers. You acknowledge and
            agree that the form and nature of the Services which ZillOut
            provides, may require affecting certain changes in it, therefore,
            ZillOut reserves the right to suspend/cancel, or discontinue any or
            all products or services at any time without notice, make
            modifications and alterations in any or all of its contents,
            products and services contained on the site without any prior
            notice.
          </ListItem>
          <ListItem>
            We, the software, or the software application store that makes the
            software available for download may include functionality to
            automatically check for updates or upgrades to the software. Unless
            your device, its settings, or computer software does not permit
            transmission or use of upgrades or updates, you agree that we, or
            the applicable software or software application store, may provide
            notice to you of the availability of such upgrades or updates and
            automatically push such upgrade or update to your device or computer
            from time-to-time. You may be required to install certain upgrades
            or updates to the software in order to continue to access or use the
            Services, or portions thereof (including upgrades or updates
            designed to correct issues with the Services). Any updates or
            upgrades provided to you by us under the Terms shall be considered
            part of the Services.
          </ListItem>
          <ListItem>
            You acknowledge and agree that if ZillOut disables access to your
            account, you may be prevented from accessing the Services, your
            account details, or any files or other content, which is contained
            in your account.
          </ListItem>
          <ListItem>
            You acknowledge and agree that while ZillOut may not currently have
            set a fixed upper limit on the number of transaction you may send or
            receive through the Services, ZillOut may set such fixed upper
            limits at any time, at ZillOut's discretion.
          </ListItem>
        </UnorderedList>
        <Text mt={3} mb={1} color="whiteAlpha.800" fontWeight={"bold"}>
          By using ZillOut's Services you agree to the following disclaimers:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6} spacing={1}>
          <ListItem>
            The Content on these Services is for informational purposes only.
            ZillOut disclaims any liability for any information that may have
            become outdated since the last time the particular piece of
            information was updated. ZillOut reserves the right to make changes
            and corrections to any part of the Content on these Services at any
            time without prior notice. ZillOut does not guarantee the quality of
            the Goods, the prices listed in the signature drinks or the event
            prices, the availability at any location. Unless stated otherwise,
            all pictures and information contained on these Services are
            believed to be owned by or licensed to ZillOut. Please email a
            takedown request (by using the "Contact Us" link on the home page)
            to the webmaster if you are the copyright owner of any Content on
            these Services and you think the use of the above material violates
            Your copyright in any way. Please indicate the exact URL of the
            webpage in your request. All images shown here have been digitized
            by ZillOut. No other party is authorized to reproduce or republish
            these digital versions in any format whatsoever without the prior
            written permission of ZillOut.
          </ListItem>
          <ListItem>
            Any certification, licenses, or permits ("Certification") or
            information in regard to such Certification that may be displayed on
            the Location's listing page on the Platform is for informational
            purposes only. Such Certification is displayed by ZillOut on an 'as
            available' basis that is provided to ZillOut by the Location
            partner(s). ZillOut does not make any warranties about the validity,
            authenticity, reliability, and accuracy of such Certification or any
            information displayed in this regard. Any reliance by a Customer
            upon the Certification or information thereto shall be strictly at
            such Customer's own risk and ZillOut in no manner shall assume any
            liability whatsoever for any losses or damages in connection with
            the use of this information or for any inaccuracy, invalidity, or
            discrepancy in the Certification or non-compliance of any applicable
            local laws or regulations by the Location partner.
          </ListItem>
          <ListItem>
            ZillOut reserves the right to charge a subscription and/or
            membership and/or convenience fees from a Customer, by giving
            reasonable prior notice, in respect of any product, service, or any
            other aspect of the ZillOut Platform anytime in the future.
          </ListItem>
          <ListItem>
            ZillOut may from time to time introduce referral and/or
            incentive-based programs for its Customers (Program). These Programs
            (s) may be governed by their respective terms and conditions. By
            participating in the Program, Customers are bound by the Program
            terms and conditions as well as the ZillOut Platform terms. Further,
            ZillOut reserves the right to terminate/suspend the Customer's
            account and/or credits/points earned and/or participation of the
            Customer in the Program if ZillOut determines in its sole discretion
            that the Customer has violated the rules of the Program and/or has
            been involved in activities that are in contravention of the Program
            terms and/or ZillOut Platform terms or has engaged in activities
            which are fraudulent/unlawful in nature. Furthermore, ZillOut
            reserves the right to modify, cancel and discontinue its Program
            without notice to the Customer.
          </ListItem>
        </UnorderedList>
        <Heading as="h3" size="lg" color={"white"} mt={8} mb={4}>
          Use of services by you or Customer
        </Heading>
        <OrderedList
          textColor={"whiteAlpha.800"}
          spacing={4}
          styleType="upper-roman"
        >
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>
              ZillOut Customer Account Including 'Claim Your Business Listing'
              Access
            </Text>

            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                You must create an account in order to use some of the features
                offered by the Services, including without limitation to 'claim
                your business listing' on the Services. Use of any personal
                information you provide to us during the account creation
                process is governed by our Privacy Policy. You must keep your
                password confidential and you are solely responsible for
                maintaining the confidentiality and security of your account,
                all changes and updates submitted through your account, and all
                activities that occur in connection with your account.
              </ListItem>
              <ListItem>
                You may also be able to register to use the Services by logging
                into your account with your credentials from certain third-party
                social networking sites (e.g., Facebook). You confirm that you
                are the owner of any such social media account and that you are
                entitled to disclose, Your social media login information to us.
                You authorize us to collect your authentication information, and
                other information that may be available on or through your
                social media account consistent with your applicable settings
                and instructions.
              </ListItem>
              <ListItem>
                In creating an account and/or claiming your business listing,
                you represent to us that all information provided to us in such
                a process is true, accurate, and correct and that you will
                update your information as and when necessary in order to keep
                it accurate. If you are creating an account or claiming a
                business listing, then you represent to us that you are the
                owner or authorized agent of such business. You may not
                impersonate someone else, create or use an account for anyone
                other than yourself, provide an email address other than your
                own, create multiple accounts or business listings except as
                otherwise authorized by us, or provide or use false information
                to obtain access to a business listing on the Services that you
                are not legally entitled to claim. You acknowledge that any
                false claiming of a business listing may cause ZillOut or third
                parties to incur substantial economic damages and losses for
                which you may be held liable and accountable.
              </ListItem>
              <ListItem>
                You are also responsible for all activities that occur in your
                account. You agree to notify us immediately of any unauthorized
                use of your account in order to enable us to take necessary
                corrective action. You also agree that you will not allow any
                third party to use your ZillOut account for any purpose and that
                you will be liable for such unauthorized access.
              </ListItem>
              <ListItem>
                By creating an account, you agree to receive certain
                communications in connection with ZillOut Platform or Services.
                For example, you might receive comments from other Customers or
                other Customers may follow the activity to do on your account.
                You can opt out or manage your preferences regarding
                non-essential communications through account settings.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>Others Terms</Text>
            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                You agree to use the Services only for purposes that are
                permitted by (a) the Terms and (b) any applicable law,
                regulation, or generally accepted practices or guidelines in the
                relevant jurisdictions.
              </ListItem>
              <ListItem>
                You agree to use the data owned by ZillOut (as available on the
                Services or through any other means like API etc.) only for
                personal use/purposes and not for any commercial use (other than
                in accordance with 'Claim Your Business Listing' access) unless
                agreed to by/with ZillOut in writing.
              </ListItem>
              <ListItem>
                You agree not to access (or attempt to access) any of the
                Services by any means other than the interface that is provided
                by ZillOut, unless you have been specifically allowed to do so,
                by way of a separate agreement with ZillOut. You specifically
                agree not to access (or attempt to access) any of the Services
                through any automated means (including use of scripts or web
                crawlers) and shall ensure that you comply with the instructions
                set out in any robots.txt file present on the Services.
              </ListItem>
              <ListItem>
                You agree that you will not engage in any activity that
                interferes with or disrupts the Services (or the servers and
                networks which are connected to the Services). You shall not
                delete or revise any material or information posted by any other
                Customer(s), shall not engage in spamming, including but not
                limited to any form of emailing, posting, or messaging that is
                unsolicited.
              </ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>
        <Heading as="h3" size="lg" color={"white"} mt={8} mb={4}>
          Content
        </Heading>
        <OrderedList
          textColor={"whiteAlpha.800"}
          spacing={4}
          styleType="upper-roman"
        >
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>
              Ownership of ZillOut Content and Proprietary Rights
            </Text>
            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                We are the sole and exclusive copyright owners of the Services
                and our Content. We also exclusively own the copyrights,
                trademarks, service marks, logos, trade names, trade dress, and
                other intellectual and proprietary rights throughout the world
                (the "IP Rights") associated with the Services and ZillOut
                Content. You acknowledge that the Services contain original
                works and have been developed, compiled, prepared, revised,
                selected, and arranged by us and others through the application
                of methods and standards of judgment developed and applied
                through the expenditure of substantial time, effort, and money
                and constitutes the valuable intellectual property of us and
                such others. You further acknowledge that the Services may
                contain information that is designated as confidential by
                ZillOut and that you shall not disclose such information without
                ZillOut's prior written consent.
              </ListItem>
              <ListItem>
                You agree to protect ZillOut's proprietary rights and the
                proprietary rights of all others having rights in the Services
                during and after the term of this agreement and to comply with
                all reasonable written requests made by us or our suppliers and
                licensors of content or otherwise to protect their and others'
                contractual, statutory, and common law rights in the Services.
                You acknowledge and agree that ZillOut (or ZillOut's licensors)
                own all legal rights, title, and interest in and to the
                Services, including any IP Rights which subsist in the Services
                (whether those rights happen to be registered or not, and
                wherever in the world those rights may exist). You further
                acknowledge that the Services may contain information that is
                designated as confidential by ZillOut and that you shall not
                disclose such information without ZillOut's prior written
                consent. Unless you have agreed otherwise in writing with
                ZillOut, nothing in the Terms gives you a right to use any of
                ZillOut's trade names, trademarks, service marks, logos, domain
                names, and other distinctive brand features.
              </ListItem>
              <ListItem>
                You agree not to use any framing techniques to enclose any
                trademark or logo or other proprietary information of ZillOut;
                or remove, conceal or obliterate any copyright or other
                proprietary notice or source identifier, including without
                limitation, the size, color, location, or style of any
                proprietary mark(s). Any infringement shall lead to appropriate
                legal proceedings against you at the appropriate forum for
                seeking all available/possible remedies under applicable laws of
                the country of violation. You cannot modify, reproduce, publicly
                display or exploit in any form or manner whatsoever any of
                ZillOut's Content in whole or in part except as expressly
                authorized by ZillOut.
              </ListItem>
              <ListItem>
                To the fullest extent permitted by applicable law, we neither
                warrant nor represent that your use of materials displayed on
                the Services will not infringe the rights of third parties not
                owned by or affiliated with us. You agree to immediately notify
                us upon becoming aware of any claim that the Services infringe
                upon any copyright trademark, or other contractual,
                intellectual, statutory, or common law rights by following the
                instructions contained below in section XVI.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>Your License to ZillOut Content</Text>
            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                We grant you a personal, limited, non-exclusive, and
                non-transferable license to access and use the Services only as
                expressly permitted in these Terms. You shall not use the
                Services for any illegal purpose or in any manner inconsistent
                with these Terms. You may use the information made available
                through the Services solely for your personal, non-commercial
                use. You agree not to use, copy, display, distribute, modify,
                broadcast, translate, reproduce, reformat, incorporate into
                advertisements and other works, sell, promote, create derivative
                works, or in any way exploit or allow others to exploit any of
                ZillOut Content in whole or in part except as expressly
                authorized by us. Except as otherwise expressly granted to you
                in writing, we do not grant you any other express or implied
                right or license to the Services, ZillOut Content, or our IP
                Rights.
              </ListItem>
              <ListItem>
                Any violation by you of the license provisions contained in this
                Section may result in the immediate termination of your right to
                use the Services, as well as potential liability for copyright
                and other IP Rights infringement depending on the circumstances.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>
              ZillOut License to Your or Customer Content
            </Text>
            <Text textColor={"whiteAlpha.800"} pl={4} my={1}>
              By submitting Your Content you hereby irrevocably grant ZillOut a
              perpetual, irrevocable, worldwide, non-exclusive, fully paid and
              royalty-free, assignable, sub-licensable, and transferable license
              and right to use Your Content (including content shared by any
              business user having access to a 'location business page in the
              app' to manage claimed business listings or otherwise) and all IP
              Rights therein for any purpose including API partnerships with
              third parties and in any media existing now or in future. By "use"
              we mean use, copy, display, distribute, modify, translate,
              reformat, incorporate into advertisements and other works,
              analyze, promote, commercialize, create derivative works, and in
              the case of third party services, allow their users and others to
              do the same. You grant us the right to use the name or username
              that you submit in connection with Your Content. You irrevocably
              waive and cause to be waived, any claims and assertions of moral
              rights or attribution with respect to Your Content brought against
              ZillOut or its Customers, any third-party services, and their
              users.
            </Text>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>
              Representations Regarding Your or Customer Content
            </Text>
            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                You are responsible for Your Content. You represent and warrant
                that you are the sole author of, own, or otherwise control all
                of the rights of Your Content or have been granted explicit
                permission from the rights-holder to submit Your Content; Your
                Content was not copied from or based in whole or in part on any
                other content, work, or App/Website; Your Content was not
                submitted via the use of any automated process such as a script
                bot; use of Your Content by us, third-party services, and our
                and any third party users will not violate or infringe any
                rights of yours or any third party; Your Content is truthful and
                accurate, and Your Content does not violate the Guidelines and
                Policies or any applicable laws
              </ListItem>
              <ListItem>
                If Your Content is a review, you represent and warrant that you
                are the sole author of that review; the review reflects actual
                dining and partying experience that you had; you were not paid
                or otherwise remunerated in connection with your authoring or
                posting of the review; and you had no financial, competitive, or
                other personal incentives to author or post a review that was
                not a fair expression of your honest opinion.
              </ListItem>
              <ListItem>
                You assume all risks associated with Your Content, including
                anyone's reliance on its quality, accuracy, or reliability, or
                any disclosure by you of information in Your Content that makes
                you personally identifiable. While we reserve the right to
                remove Content, we do not control actions or Content posted by
                our Customers and do not guarantee the accuracy, integrity, or
                quality of any Content. You acknowledge and agree that Content
                posted by Customers and any and all liability arising from such
                Content is the sole responsibility of the Customer who posted
                the content, and not ZillOut.
              </ListItem>
            </OrderedList>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>Content Removal</Text>
            <Text textColor={"whiteAlpha.800"} pl={4} mt={1}>
              We reserve the right, at any time and without prior notice, to
              remove, block, or disable access to any Content that we, for any
              reason or no reason, consider being objectionable, in violation of
              the Terms, or otherwise harmful to the Services or our Customers
              in our sole discretion. Subject to the requirements of applicable
              law, we are not obligated to return any of Your Content to you
              under any circumstances. Further, the Location reserves the right
              to delete any images and pictures forming part of Customer
              Content, from such Location's listing page at its sole discretion.
            </Text>
          </ListItem>
          <ListItem color="whiteAlpha.800">
            <Text fontWeight={"bold"}>Third Party Content and Links</Text>
            <OrderedList textColor={"whiteAlpha.800"} pl={4} mt={1} spacing={1}>
              <ListItem>
                Some of the content available through the Services may include
                or link to materials that belong to third parties, such as
                third-party reservation services or online food
                delivery/ordering. Please note that your use of such third-party
                services will be governed by the terms of service and privacy
                policy applicable to the corresponding third party. We may
                obtain business addresses, phone numbers, and other contact
                information from third-party vendors who obtain their data from
                public sources.
              </ListItem>
              <ListItem>
                We have no control over, and make no representation or
                endorsement regarding the accuracy, relevancy, copyright
                compliance, legality, completeness, timeliness, or quality of
                any product, services, advertisements, and other content
                appearing in or linked to from the Services. We do not screen or
                investigate third party material before or after including it on
                our Services.
              </ListItem>
              <ListItem>
                We reserve the right, in our sole discretion and without any
                obligation, to make improvements to, or correct any error or
                omissions in, any portion of the content accessible on the
                Services. Where appropriate, we may in our sole discretion and
                without any obligation, verify any updates, modifications, or
                changes to any content accessible on the Services, but shall not
                be liable for any delay or inaccuracies related to such updates.
                You acknowledge and agree that ZillOut is not responsible for
                the availability of any such external sites or resources, and
                does not endorse any advertising, products, or other materials
                on or available from such App/Websites or resources.
              </ListItem>
              <ListItem>
                Third-party content, including content posted by our Customers,
                does not reflect our views or that of our parent, subsidiary,
                affiliate companies, branches, employees, officers, directors,
                or shareholders. In addition, none of the content available
                through the Services is endorsed or certified by the providers
                or licensors of such third-party content. We assume no
                responsibility or liability for any of Your Content or any
                third-party content.
              </ListItem>
              <ListItem>
                You further acknowledge and agree that ZillOut is not liable for
                any loss or damage which may be incurred by you as a result of
                the availability of those external sites or resources, or as a
                result of any reliance placed by you on the completeness,
                accuracy, or existence of any advertising, products or other
                materials on, or available from, such web sites or resources.
                Without limiting the generality of the foregoing, we expressly
                disclaim any liability for any offensive, defamatory, illegal,
                invasive, unfair, or infringing content provided by third
                parties.
              </ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>

        <Heading as="h3" size="md" color={"white"} mt={6}>
          Contact Us
        </Heading>

        <Text my={2} color="whiteAlpha.800">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </Text>
        <UnorderedList textColor={"whiteAlpha.800"} pl={6}>
          <ListItem>By email: squad@zillout.com</ListItem>
          <ListItem>Phone number: 9380841878</ListItem>
        </UnorderedList>
      </Flex>

      <Footer />
    </Container>
  );
}
