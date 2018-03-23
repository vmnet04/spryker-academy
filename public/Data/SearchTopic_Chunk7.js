define({"477":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_fe_implementation.html",a:"Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation"},"478":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_checkout_implementation.html",a:"The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout"},"479":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_be_implementation.html",a:"\nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation"},"480":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_shared_implementation.html",a:"\nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation"},"481":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_test_implementation.html",a:"Testing the Direct Debit Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation"},"482":{i:0.000835698346871092,u:"../enablement/tutorials_and_howtos/howtos/ht_add_new_shipment_method_2.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method 2.0"},"483":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_cart.html",a:"This article describes how to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker  Super Attributes .  UI Changes: Cart now supports changing the items in the cart by modifying their attributes. If we ...",t:"HowTo - Cart Integration"},"484":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"485":{i:0.000846207711493027,u:"../enablement/tutorials_and_howtos/howtos/ht_data_import.html",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"486":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_extend_inuse_core.html",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"487":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_force_https.html",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"488":{i:0.000617314849377722,u:"../enablement/tutorials_and_howtos/howtos/ht_case_sensitive_file_system_mac.html",a:"By default Mac OS uses a case-insensitive file system to support compatibility to applications (e.g. Photoshop) provided for the operating system. The file-system itself is capable of working in a case-sensitive mode. There are a number of options on how to change case sensitivity: Re-partition the ...",t:"HowTo - Handling Case Sensitive File-System on Mac OS"},"489":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"490":{i:0.000859738457807477,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"491":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"492":{i:0.000859738457807477,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout Plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"493":{i:0.000859738457807477,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"494":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"495":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"496":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"497":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout"},"498":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"499":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"500":{i:0.000669925511540718,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"501":{i:0.00142088144275685,u:"../enablement/tutorials_and_howtos/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"502":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"503":{i:0.0039116325815969,u:"../enablement/tutorials_and_howtos/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependencies"},"504":{i:0.000651648778695018,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_spryker_with_mysql.html",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"505":{i:0.00323345987836576,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multi_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"506":{i:0.000586795801095682,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"507":{i:0.00110635649137716,u:"../enablement/store_administration_guide/store_administration_guide.html",a:"The  features list  will give you an overview of what the Spryker Commerce OS offers and prospective extensions that you can add in your development process. Next, user manuals for the back-office application (Zed) are offered. The manuals include all bundles that are available to configure, namely ...",t:"Store Administration"},"508":{i:0.000586795801095682,u:"../enablement/store_administration_guide/bg_sales.html",a:"Sales Orders can be managed by the shop owner from the back-office application (Zed). In this document we’ll describe the functionality offered by the Sales module that will help you manage the orders submitted in your shop. The Order Management System strongly correlates with the state machines you ...",t:"Sales"},"509":{i:0.00680620972621886,u:"../enablement/store_administration_guide/bg_customer.html",a:"Customer data can be managed either by the shop owner from the back-office application (Zed) or by the customer from the shop interface (Yves). When managing customer data from the back-office application, you can add personal information like name and email address, as well as customer billing and ...",t:"Customer"},"510":{i:0.000981261737975783,u:"../enablement/store_administration_guide/category/bg_about_category.html",a:"About Categories Managing volumes of products requires that you be able to group together items under specific criteria. With Categories, you can group and build hierarchies of products by category. This is how we create a structure to display products by, for example, Electronics. Under this ...",t:"Spryker Commerce OS"},"511":{i:0.00732132767180028,u:"../enablement/store_administration_guide/category/bg_ui_category.html",a:"A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. Category assigning A product can be assigned to one or more product categories. Next, we ...",t:"Category"},"512":{i:0.000704346659031067,u:"../enablement/store_administration_guide/cms/bg_cms.html",a:"In ZED Admin UI there is a dedicated section that enables you to create pages, blocks, as well as configure URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following sections: CMS - ...",t:"CMS"},"513":{i:0.000734730035699301,u:"../enablement/store_administration_guide/cms/cms_pages/cms_pages.html",a:"CMS - Pages In Pages section you can create new CMS pages, publish, view, edit them as well as manage all their changes with the versioning functionality.",t:"CMS - Pages"},"514":{i:0.00171325338013066,u:"../enablement/store_administration_guide/cms/cms_pages/cms_creating_new_page.html",a:"To demonstrate how to add a new page in Yves using the CMS, we will create a page with contact information in the demo shop. Adding a Template For the New ‘Contact Us’ Page Create a new Twig template under the src/Pyz/Yves/Cms/Theme/default/template/ folder. We’ll call it contact_page.twig and it ...",t:"CMS - Creating a New Page"},"515":{i:0.00137147878440503,u:"../enablement/store_administration_guide/cms/cms_pages/cms_url_redirects.html",a:" CMS - URL Redirects URL redirects can be configured from the CMS interface. You must specify the URL you need to redirect, the new URL and the status code which plays a major role for search engines.   See also: CMS - Creating a New Page Preview Draft Page CMS Block CMS Glossary  CMS Versioning ...",t:" CMS - URL Redirects"},"516":{i:0.00121827305824528,u:"../enablement/store_administration_guide/cms/cms_pages/cms_versions.html",a:"With CMS versioning, you can manage all changes for a CMS page.  You can compare CMS versions, rollback or discard changes to a page.  To view versioning for a CMS page, click Version History from the top of the page. Rollback to CMS Version By selecting previous CMS versions, you will be able to ...",t:"CMS Versioning"},"517":{i:0.00626207434148167,u:"../enablement/store_administration_guide/cms/cms_block.html",a:"How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two extensions\n ...",t:"CMS Block"},"518":{i:0.000630031119495239,u:"../enablement/store_administration_guide/products/products_overview.html",a:"Products are the core of your shop and deserve a great deal of your attention, as selling them is the whole reason behind your online store. Therefore, it is essential to know how to manage the products you present to your customers. The whole product management, from product creation to stock and ...",t:"Products Area Overview"},"519":{i:0.000630031119495239,u:"../enablement/store_administration_guide/products/products.html",a:"Product management begins with creation of products and building a product catalog.  Most products are not just a single item and often one product comes in different shapes and sizes. Therefore, the first level of the catalog is an abstract level where we set up the common attributes of a product. ...",t:"Products"},"520":{i:0.000586795801095682,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector.html",a:"\n            The Customer User Connector feature allows to connect a customer to 1 Zed user.\n         This feature is supported by 2 modules: CustomerUserConnector module:\n                Defines database schema requirements and CustomerTransferUsernameExpanderPlugin plugin to populate customer\u0027s ...",t:"Customer User Connector"},"521":{i:0.00111601316223317,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_feature_integration.html",a:"Prerequisites To prepare your project to work with Customer User Connector: Require the Customer User Connector modules in your composer by running\n                 composer require spryker/customer-user-connector composer require spryker/customer-user-connector-gui \n                Install the ...",t:"Feature Integration - Customer User Connector"},"522":{i:0.00083618493243079,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_under_the_hood.html",a:"Under the Hood - Customer User Connector Database Schema A new field (fk_user) is added to spy_customer to make it possible to connect a customer to 1 Zed user.   Last review date: Sep. 22, 2017 ",t:"Under the Hood - Customer User Connector"},"523":{i:0.000704346659031067,u:"../enablement/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"524":{i:0.00356183167089144,u:"../enablement/store_administration_guide/search_and_filters/search_and_filters.html",a:"Having a well-thought-out product search is a huge opportunity to provide an amazing shopping experience. It is one of the primary ways you can help customers find what they’re looking for. In our Zed Admin UI we have features that enable you to control search and filtering preferences and customize ...",t:"Search and Filters"},"525":{i:0.00417657937532822,u:"../enablement/store_administration_guide/search_and_filters/category_filters/category_filters.html",a:"An essential part of organizing products in a store is to arrange items into  categories . Category Filters allow you to refine and customize the way filters are listed when you search by category. With Category Filters you can improve and optimize how visitors to the store locate products. When a ...",t:"Category Filters Overview"},"526":{i:0.00400382127894829,u:"../enablement/store_administration_guide/search_and_filters/category_filters/gui_category_filters.html",a:"To access the Category Filters page, from the Administration Interface\u0027s main menu (on the left), click Search and Filters and then Category Filters. Category filters page has two 2 major areas: The Root nodes list The Category tree The Category Filters page consists of the following elements: ",t:"Graphic User Interface - Category Filters"},"527":{i:0.00457104531220833,u:"../enablement/store_administration_guide/search_and_filters/category_filters/creating_managing_category_filters.html",a:"In the following section we will show you how to  create a Category filter set and customize filter behavior. Creating a  Filter Set To create a new filter set: Go to the Search and Filters and click Category Filters. Select the root category\nfrom the Root nodes list table. \n                The ...",t:"Creating and Managing Category Filters"},"528":{i:0.00161876556986436,u:"../enablement/store_administration_guide/discounts/bg_discounts.html",a:"In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only if the linked decision rules are satisfied and if it’s active and valid. Cart Rules This ...",t:"Discounts"},"529":{i:0.000930785724018575,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"530":{i:0.000930785724018575,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},"531":{i:0.00161876556986436,u:"../enablement/store_administration_guide/discounts/bg_discounts_2_0.html",a:"The latest version is  Discounts In Spryker, there are two types of discounts that can be defined : Cart Rules This discount is contained in the cart and doesn’t need any action to be performed by the customer. This discount is automatically applied if the decision rules attached to it are being ...",t:"Discounts 2.0"},"532":{i:0.00254089953773969,u:"../enablement/store_administration_guide/navigation/navigation_overview.html",a:"One of the first places that your customer goes to, once in your online shop, is the main navigation. The main navigation helps to guide your customer to the most relevant place. You will always want to build the most appealing and neat path for your customer to find her/his way. In the end of the ...",t:"Navigation Overview"},"533":{i:0.00254089953773969,u:"../enablement/store_administration_guide/navigation/graphic_user_interface_navigation.html",a:"To access the Navigation page in the ZED Administration Interface, go to the main menu (on the left) and click Navigation. Navigation page is visually represented in 4 major areas: Create Navigation button List of navigation elements Navigation tree frame Create/Update child node frame In the table ...",t:"Graphic User Interface - Navigation"},"534":{i:0.00254089953773969,u:"../enablement/store_administration_guide/navigation/creating_managing_navigation_tree.html",a:"The following section describes how to add and manage a new navigation element and its nodes. Creating a New Navigation To create a new navigation element: Go to the Navigation section and click Create Navigation button. Specify the following: Name - give your navigation tree a name Key - specify ...",t:"Creating and Managing a Navigation Tree"},"535":{i:0.00457574290131945,u:"../enablement/store_administration_guide/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the Zed Admin UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: ...",t:"Shipment"},"536":{i:0.0046952135486688,u:"../enablement/store_administration_guide/bg_user_control.html",a:"The purpose of the users control module is to manage back-office users creation and the associated roles and assignment to groups. Create a Role Create a Group Create a User Next, we will help you create a new role, a group that has that role associated and a user that we want to assign to that ...",t:"User Control"},"537":{i:0.000736689080382624,u:"../enablement/videos___webinars/videos.html",a:"We believe that good technology doesn’t stop with the code. You also need the examples and information to help you convert your vision into reality. In this section you can check out our videos for more information about Spryker Commerce OS. You can also send us direct requests for videos and topics ...",t:"Spryker Videos"},"538":{i:0.000617314849377722,u:"../enablement/videos___webinars/demo_shop.html",a:"Demo Shop This video is a short overview of the Spryker Demo Shop, our out-of-the-box online shop boilerplate. ",t:"Demo Shop"},"539":{i:0.000617314849377722,u:"../enablement/videos___webinars/product_management.html",a:"This video demonstrates how products are managed in Spryker. The video reviews product structure discussing concepts such as abstract and concrete products and their benefits. Then we review product features such as: Product Options, Product Labels, Product Relations, Product Sets and Product ...",t:"Product Management"},"540":{i:0.000617314849377722,u:"../enablement/videos___webinars/product_groups.html",a:"Product Groups This video shows how to create product groups. Product Groups allow you to display an item and its different variants such as different shoe colors or different t-shirt sizes. ",t:"Product Groups"},"541":{i:0.000617314849377722,u:"../enablement/videos___webinars/product_sets.html",a:"Product Sets This video shows how product sets are managed in Spryker. The video uses the Spryker Demo Shop to review how products are displayed and bought as a set and how sets are managed and configured in the Administration Interface.",t:"Product Sets"},"542":{i:0.000586795801095682,u:"../enablement/videos___webinars/category_management.html",a:"Category Management This video shows how we use Categories to structure products for displaying and filtering products. We use the Demo Shop and the Spryker Administration Interface to demonstrate this feature.",t:"Category Management"},"543":{i:0.000617314849377722,u:"../enablement/videos___webinars/cms_pages.html",a:"CMS Pages This video shows how CMS content is displayed and managed in Spryker. We use the Demo Shop to demonstrate this feature.",t:"CMS Pages"},"544":{i:0.000617314849377722,u:"../enablement/videos___webinars/cms_blocks.html",a:"CMS Blocks This video shows how CMS blocks are used to add complementary content to store pages. We use the Demo Shop to demonstrate this feature.",t:"CMS Blocks"},"545":{i:0.000617314849377722,u:"../enablement/videos___webinars/navigation.html",a:"Navigation This video shows how Navigation is used and created We use the Demo Shop to demonstrate this feature.",t:"Navigation"},"546":{i:0.000617314849377722,u:"../enablement/videos___webinars/wishlists.html",a:"Wishlists This video shows our demo shop implementation of Wishlists. ",t:"Wishlists"},});