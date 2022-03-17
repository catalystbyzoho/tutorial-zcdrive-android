+++
title= "Cache-test"
description= "Cache"
tags = [ "Description", "Common operations", "Instance methods" ]
type= "help"
layout= "single"
weight= 5
+++




{{%/divtag%}}
#Cache
{{%/divtag%}}
	{{%/divtag%}}
		####Table of Contents:
			{{%list%}}
				*{{%link  href="#Introduction" %}}Introduction{{%/link}}
				*{{%link  href="#Purpose" %}}Purpose{{%/link}}
				*{{%link  href="#Key_Concepts" %}}Key Concepts{{%/link}}
				*{{%link  href="#Architecture" %}}Architecture{{%/link}}
				*{{%link  href="#Lifecycle" %}}Lifecycle{{%/link}}
				*{{%link  href="#Benefits" %}}Benefits{{%/link}}
				*{{%link  href="#Use_Cases" %}}Use Cases{{%/link}}
				*{{%link  href="#Implementation" %}}Implementation{{%/link}}
					{{%list%}}
						*{{%link  href="#Creating" %}}Create a Segment{{%/link}}
						*{{%link  href="#Renaming" %}}Rename a Segment{{%/link}}
						*{{%link  href="#Creating_Cache" %}}Create a Cache Item{{%/link}}
						*{{%link  href="#Editing" %}}Edit a Cache Item{{%/link}}
						*{{%link  href="#Deleting" %}}Delete a Cache Item{{%/link}}
						*{{%link  href="#Deleting_Segment" %}}Delete a Segment{{%/link}}
					{{%/list%}}
				
			{{%/list%}}
	{{%divtag%}}

	
##{{%link  ID="Introduction" %}}Introduction{{%/link}}	
	Cache is a small storage component that provides a faster way to retrieve data that is actively used. You can use the cache to store ephemeral data or data that is frequently accessed. 
	When building memory-intensive real-time applications or microservices that demand sub-millisecond responses, caching data is highly required. This is because, such dynamic cloud-based applications perform constant read and write operations. Accessing the main data storage unit for every read and write operation is highly expensive, and decreases the performance of the application.
	Since the cache is an in-memory component, it can manage large volumes of data transmission with minimal latency. It therefore improves your application's performance by a significant amount, and provides a rich user experience. 
	Catalyst cache is provided as an in-memory individual component that can be used independently of your main data storage unit. It is highly useful when implemented in dynamic, memory-intensive applications. You can partition the cache memory into segments in Catalyst, and store cache items in them from the Catalyst console. 
	To learn about using Catalyst cache in the development and production environments, visit the {{%link  href="https://www.zoho.com/catalyst/help/environments.html" target="_blank" %}}Environments help page{{%/link}}.

	####SDK and API documentation
	You can also work with Catalyst cache using the SDKs or the API. These enable you to fetch, insert, or update cache items in your project, and perform other actions. For more information and code samples on working in these programming environments, refer to these help pages:
	{{%list%}}
		*{{%link  href="https://catalyst.zoho.com/sdk/javasdk/cache_getsegmentinst.html" %}}Cache - Java SDK{{%/link}}
		*{{%link  href="https://catalyst.zoho.com/sdk/nodeJS-sdk/nodeJS_overview.html" %}}Cache - Node.js SDK{{%/link}}
		*{{%link  href="https://catalyst.zoho.com/help/api/introduction/overview.html" %}}Cache - API{{%/link}}
	{{%/list%}}

	
##{{%link  ID="Key_Concepts" %}}Key Concepts{{%/link}}
	Before you learn more about the architecture of Catalyst cache, it's important to familiarize yourself with some of its fundamental concepts. 
	###Segments
	Catalyst cache is divided into partitions called segments. Each segment represents a cache unit. Cache segments can be created to categorize and organize data used for similar purposes. Each cache segment can contain several cache items where the data to be cached is stored.
	You can only create a cache segment from the Catalyst console. Once a segment is created, you can view or update its cache items from the console or in your application using the APIs. 
	Whenever a cache segment is created, a unique {{%bold%}}Segment ID{{%/bold%}} is created for it automatically. You can refer to the segment using its ID. You can {{%link  href="#Creating" %}}find the segment ID{{%/link}} of a cache in the Cache component page from Catalyst console.
	There is also a default segment in your cache that is created automatically when you create a project. If you cache data without having created a segment, or if you don't specify the Segment ID for an operation using the SDKs or API, the default segment will be accessed.

	
	###Cache Items
		A cache item is primarily a key-value pair, that contains a keyname and a corresponding value. A cache item in Catalyst contains the following attributes:
		{{%list%}}
			*{{%bold%}}Keyname{{%/bold%}}: The unique identifying name of the cache item. 
			*{{%bold%}}Value{{%/bold%}}: The value of the cache item. 
			*{{%bold%}}Expiration Time{{%/bold%}}: Defines the time of validity of the cache item in hours. 
		{{%/list%}}
	The default expiration time of data in a cache item is {{%bold%}}two days{{%/bold%}}. Any data that crosses two days of validity will be deleted from the cache memory automatically. You can override the default expiration time of a cache item and set it to a time within two days or less.

	
##{{%link  ID="Architecture" %}}Architecture{{%/link}}
	Catalyst implements and manages Redis cache which is backed by Zoho's powerful infrastructure. Redis is an open-source, in-memory key-value data store structure. Redis data is stored in the server's main memory as opposed to popular databases that store the data on disk. Since the data resides in-memory, accessing it avoids seek time delays and facilitates sub-millisecond response time for real-time applications. For more information, refer to the {{%link  href="https://redis.io/documentation" target="_blank" %}}official documentation of Redis{{%/link}}.
	Zoho Catalyst manages the behind-the-scenes functionalities of the Redis cache for you, allowing you to entirely focus on a higher-value application development. It handles the hardware provisioning and the multi-tenant architecture of the Redis cache. It also maintains compatibility with Redis APIs, enabling you to build functionality-rich applications without any hassles. 
	A single standard cluster in Redis caters caching services for multiple users, while Catalyst handles the segregation and allocation of resources. For example, when you create cache items for two different projects from your Catalyst account, the data of both applications might be stored in a single dedicated cluster in Redis. The identity of a cache item's source project is uniquely marked, and the cache items in the same cluster are efficiently segregated by Catalyst. 
	Catalyst therefore prevents collisions of cache items of different projects in the cluster, and returns the right cache item's value when requested. This is highly beneficial when the keynames of the cache items are the same in both the projects. 

	
##{{%link  ID="Lifecyle" %}}Lifecycle{{%/link}}
	The life cycle of a cache item can be summed up in the following steps:
		{{%list%}}
			*A user creates a cache segment in a project. A unique identification is created that identifies the segment in the Redis cluster.
			*When a cache item is created in that segment, it is bound with that segment through internal logic. 
			*All cache items that are created in various segments are stored in the same dedicated cluster along with other cache items of different segments, projects, and users. This segregation is handled by Zoho.
			*Every time a read operation is performed, Catalyst checks the cluster for the required data using internal identifications. If the data is present, it is retrieved, and the API response is received with the requested data. 
			*All cache items reside in-memory until their expiration time, unless they are deleted by the users.
		{{%/list%}}

	
##{{%link  ID="Benefits" %}}Benefits{{%/link}}
		{{%list%}}
			*
				{{%bold%}}Rapid Performance{{%/bold%}}
				Catalyst cache can reduce the data access time and latency, speeding up the I/O operations by a considerable amount. This increases the throughput of data transmission, and serves read and write requests with exceedingly fast response times.
			
			*
				{{%bold%}}Auto-Scaling{{%/bold%}}
				Catalyst cache can auto-scale to provide the required space and resources when the load increases. It maintains the consistency of its performance and scales up the data tiers based on the application's fluctuating needs. Auto-scaling ensures that your application stays reliable, and reduces app failures significantly.
			
			*
				{{%bold%}}Fully-Managed Backend{{%/bold%}}
				You can implement the Catalyst cache in your serverless application without having to directly manage or handle its architecture. This also prevents the need for you to implement the services of a cache provider in your application by yourself. 
				This helps you avoid handling the scalability, setting up and configuring the environment, or partitioning the server to your requirements manually. Zoho handles all the back-end functionalities of Redis, ensuring a faster application development.
			
			*
				{{%bold%}}Fail-Safe and Automatic Failure Handling{{%/bold%}}
				Redis accommodates both in-memory and on-disk persistence features. The in-memory storage enables faster access of data, and the on-disk persistence ensures that the data is stored in a non-volatile memory and is available at any point of time. 
				Catalyst also provides automatic failure handling, which helps you avoid monitoring or performing failure recovery tasks manually.
			
			*
				{{%bold%}}Ease of Access{{%/bold%}}
				You can work with Catalyst cache from the Catalyst console and implement it in your application using the APIs.
				In the Catalyst console, you can create a cache segment, rename a segment, delete a segment, create a cache item, edit a cache item, and delete a cache item using the Catalyst console.
			
			*
				{{%bold%}}Usage Reports{{%/bold%}}
				You can find reports of your Catalyst cache usage from the Catalyst console. {{%link  href="https://www.zoho.com/catalyst/help/metrics.html#Cache" target="_blank" %}}Metrics{{%/link}} displays the following usage information of cache: Number of Segments, Number of Keys in a Segment, Number of Keys about to Expire, and Total Size of each Segment.
				
		{{%/list%}}

	
##{{%link  ID="Use_Cases" %}}Use Cases{{%/link}}
	Catalyst cache can be used in the following scenarios:
		{{%list%}}
			*
				A weather application that provides real-time information about the temperature, weather conditions, humidity levels, and more for a particular geography uses the Catalyst cache to store the weather data. This data is updated once every hour. The existing cache items are set to expire in an hour, after which new data about the latest weather conditions are obtained from a database and are written to the cache automatically. 
			
			*
				A movie ticket booking application that allows the users to view and book movie tickets for specific theaters, which uses the Catalyst cache to store the user's session data when they initiate the process of booking tickets. This session data is set to expire in six minutes, within which the user must complete the booking process. If the user doesn't complete the booking within six minutes, the cache items are deleted, and they must initiate the booking again from scratch.
			
		{{%/list%}}
	Some other examples where Catalyst cache can be implemented include applications of the following types:
		{{%list%}}
			*Real-time gaming leaderboards
			*Geospatial applications
			*IoT applications
			*Healthcare applications
			*Financial and banking applications
			*Mobility management applications 
			*Telecommunications applications
			*E-commerce applications
		{{%/list%}}


##{{%link  ID="Implementation" %}}Implementation{{%/link}}
	The implementation section acts as a step-by-step procedure guide on working with Catalyst cache from the Catalyst console. 
	You can refer to the {{%link  href="https://www.zoho.com/catalyst/help/resources.html" target="_blank" %}}SDK and API documentations{{%/link}} for implementing cache in your application's code.

	####{{%link  ID="Creating" %}}Create a Segment{{%/link}}
You can only create a cache segment from the Catalyst console. It cannot be done using the APIs.
	{{%/divtag%}}{{%bold%}}Note:{{%/bold%}} Catalyst allows you to create upto 20 segments in a project in the {{%link  href="https://www.zoho.com/catalyst/help/environments.html" target="_blank" %}}development environment{{%/link}}. The size limit of each segment is 5 MB in the development environment. You can request Catalyst for an increase in these limits by contacting our support at {{%bold%}}support@zohocatalyst.com{{%/bold%}}. We will address each request on a case-by-case basis. There are no upper limits for segments in the production environment.{{%divtag%}}
	To create a cache segment:
	{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
			{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
		*Click {{%bold%}}Create Segment{{%/bold%}} in the **Segments** page.
		*Enter the Segment Name in the pop-up window.
			{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_create.jpg" alt="" width="400" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
		*Click {{%bold%}}Create{{%/bold%}}.	
	{{%/list%}}
Your cache segment will now be created and listed in the **Segments** page, along with details like segment ID, created by, and created time.
		{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_segments.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
	The default segment will already be present in the Segments page.

	####{{%link  ID="Renaming" %}}Rename a Segment{{%/link}}
		To rename a cache segment:
		{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
		*Click the ellipsis icon for the segment that needs to be renamed, and then click {{%bold%}}Rename{{%/bold%}} in the **Segments** page.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_segments_edit.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
			
		*Type a new name for your segment and press {{%bold%}}Enter{{%/bold%}}.
			{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_segment_rename.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
			
	{{%/list%}}

	####{{%link  ID="Creating_Cache" %}}Create a Cache Item{{%/link}}
	To create a cache item:
	{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
		*Click the name of the segment from the Segments page where the cache item should be created
		*Click {{%bold%}}Create Cache Item{{%/bold%}}.
			{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_item.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
		*Enter a keyname, value, and the expiration time in hours for the cache item.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_create_cache_item.jpg" alt="" width="500" border="0" hspace="0" vspace="0"  %}}{{%/image%}
			{{%/divtag%}}{{%bold%}}Notes:{{%/bold%}}
				{{%list%}}
					*The keyname of a cache item is unique for a segment. 
					*If you do not enter a value for the expiry time, it is automatically set to the default validity (two days) 
				{{%/list%}}
			{{%divtag%}}
		
 		*Click {{%bold%}}Create{{%/bold%}}.
	{{%/list%}}
The cache item will be created and listed in the segment's page.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_key_details.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
You can find a particular cache item by searching using its keyname in the search bar and pressing {{%bold%}}Enter{{%/bold%}}. 
	{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_item_search.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}	

	####{{%link  ID="Editing" %}}Edit a Cache Item{{%/link}}
	To edit a cache item:
	{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
		*Click the name of the segment whose cache item you want to edit, in the **Segments** page.
		*Click on the key name and click {{%bold%}}Edit{{%/bold%}} in the **Key Details** window.
		*Make the necessary edits to the cache item.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_edit_cache_item.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
 		*Click {{%bold%}}Save{{%/bold%}}.
	{{%/list%}}
	The cache item will be updated.

	####{{%link  ID="Deleting" %}}Delete a Cache Item{{%/link}}
	To delete a cache item:
	{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
		*Click the name of the segment whose cache item you want to delete, in the **Segments** page.
		*Click on the key name and click {{%bold%}}Delete{{%/bold%}} in the **Key Details** window.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_delete_cache_item.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
		*Click {{%bold%}}Yes, Proceed{{%/bold%}} in the confirmation window.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_delete_cache_item_confirmation.jpg" alt="" width="400" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
 		*Click {{%bold%}}Save{{%/bold%}}.
	{{%/list%}}
The cache item will now be deleted permanently.

	####{{%link  ID="Deleting_Segment" %}}Delete a Segment{{%/link}}
	To delete a cache segment:
	{{%list%}}
		*Navigate to {{%bold%}}Develop{{%/bold%}} and then {{%bold%}}Cache{{%/bold%}}.
		*Click the ellipsis icon for the segment that needs to be deleted and click {{%bold%}}Delete{{%/bold%}}.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_segment_delete.jpg" alt="" width="1100" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
		*Click {{%bold%}}Yes, Proceed{{%/bold%}} in the confirmation window.
{{%image  align="bottom" src="/sites/default/files/catalyst/catalyst_cache_segment_delete_confirmation.jpg" alt="" width="400" border="0" hspace="0" vspace="0"  %}}{{%/image%}
		
	{{%/list%}}
 	The segment will now be deleted permanently.
	{{%divtag%}}
{{%divtag%}}