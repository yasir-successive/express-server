### CLIENT-SERVER ARCHITECTURE
Client/server architecture is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server over a network or internet connection. This system shares computing resources.

Client/server architecture is also known as a networking computing model or client/server network because all the requests and services are delivered over a network.

Client/server architecture is a producer/consumer computing architecture where the server acts as the producer and the client as a consumer. The server houses and provides high-end, computing-intensive services to the client on demand. These services can include application access, storage, file sharing, printer access and/or direct access to the server’s raw computing power.

Client/server architecture works when the client computer sends a resource or process request to the server over the network connection, which is then processed and delivered to the client. A server computer can manage several clients simultaneously, whereas one client can be connected to several servers at a time, each providing a different set of services. In its simplest form, the internet is also based on client/server architecture where web servers serve many simultaneous users with website data.

![client server image](http://apachebooster.com/kb/wp-content/uploads/2018/05/3-tier-client-server-architecture.jpg "Client Server Image")
##### Client Server Architecture Advantages & Disadvantages

In computer networking, the term "client server" describes a network architecture where computers known as servers are used to centrally manage access to the network and to network resources and store data. Most business networks use client server architecture, as the advantages of client server implementations outweigh the disadvantages.
##### Centralized Server Advantage
Having a single server hosting the database of user names and passwords and, at the same time, managing what levels of access individual users and computers can have to specific network resources is a distinct advantage of client server architecture. Fewer support staff are needed to manage centralized security accounts than would be needed if security and resource access had to be configured on each individual computer on the network. This advantage is even greater in networks where users typically access resources from a number of computers, as resource access and log-on permissions would have to be configured for each user, on each computer that they use.
##### Centralized Server Disadvantage
### How a request get served?

Wherever a single server is used to manage resources on a network, there is always the chance that a failure of the server will bring network business to a halt. For example, if a single server hosts the user names and passwords database for a network, and the server suffers a failure, no users will be able to log on to the network until the server is fixed or replaced. A network where log-on information is configured and held on each computer does not have this problem, as the failure of a single computer does not prevent users of other computers from logging on and accessing network resources. Only the failed computer is affected

This is the process which takes a request from the clients. After getting a request from the client, this process will perform the required processing, gather the requested information, and send it to the requestor client. Once done, it becomes ready to serve another client. Server processes are always alert and ready to serve incoming requests.

Example − Web Server keeps waiting for requests from Internet Browsers and as soon as it gets any request from a browser, it picks up a requested HTML page and sends it back to that Browser.

Note that the client needs to know the address of the server, but the server does not need to know the address or even the existence of the client prior to the connection being established. Once a connection is established, both sides can send and receive information.
