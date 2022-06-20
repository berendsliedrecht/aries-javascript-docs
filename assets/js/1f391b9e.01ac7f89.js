(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{6416:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var i=t(7294),o=t(6010),a=t(4680),r=t(6810),s=t(1575),c=t(1944),d=t(5281),l="mdxPageWrapper_zHyg";function u(n){var e=n.content,t=e.metadata,u=t.title,g=t.description,p=t.frontMatter,f=p.wrapperClassName,m=p.hide_table_of_contents;return i.createElement(c.FG,{className:(0,o.Z)(null!=f?f:d.k.wrapper.mdxPages,d.k.page.mdxPage)},i.createElement(c.d,{title:u,description:g}),i.createElement(a.Z,null,i.createElement("main",{className:"container container--fluid margin-vert--lg"},i.createElement("div",{className:(0,o.Z)("row",l)},i.createElement("div",{className:(0,o.Z)("col",!m&&"col--8")},i.createElement(r.Z,null,i.createElement(e,null))),!m&&e.toc&&i.createElement("div",{className:"col col--2"},i.createElement(s.Z,{toc:e.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level}))))))}},1415:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var i=t(7294),o=t(1330);function a(n){return i.createElement(i.Fragment,null,i.createElement(o.Z,n))}},8573:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(7462),o=t(3366),a=t(7294),r=t(2389),s=t(9296),c=t(5973),d=["children"];function l(n){var e,l,u=n.children,g=(0,o.Z)(n,d),p=(0,r.Z)(),f=function(n){return a.Children.toArray(n).some((function(n){return(0,a.isValidElement)(n)}))?n:Array.isArray(n)?n.join(""):n}(u),m="string"==typeof f?c.Z:s.Z;if(!g.metastring)return a.createElement(m,(0,i.Z)({key:String(p)},g),f);console.log(g.metastring);try{e=t(9970)("./"+(l=g.metastring,l.split(" ").find((function(n){return n.match(/.(js|ts)$/)})))).default}catch(v){}var h,b=function(n){var e;return null==(e=n.split(" ").find((function(n){return n.match(/^section-/)})))?void 0:e.substr(8)}(g.metastring);return e&&(h=b?function(n,e){var t="start-section-"+n,i="end-section-"+n,o=e.split("\n"),a=o.indexOf(o.find((function(n){return n.includes(t)}))),r=o.indexOf(o.find((function(n){return n.includes(i)})));return o.slice(a+1,r).join("\r\n")}(b,e):function(n){console.log(n);var e=n.split("\n").filter((function(n){return!n.match(/section-/)}));return console.log(e.join("\r\n")),e.join("\r\n")}(e)),a.createElement(m,(0,i.Z)({key:String(p)},g),h||f)}},127:function(n,e,t){"use strict";t.r(e),e.default='import {\n  Agent,\n  InitConfig,\n  ConnectionEventTypes,\n  ConnectionStateChangedEvent,\n  WsOutboundTransport,\n  HttpOutboundTransport,\n  DidExchangeState,\n  OutOfBandRecord,\n} from "@aries-framework/core"\nimport { agentDependencies, HttpInboundTransport } from "@aries-framework/node"\n\n// start-section-1\nconst initializeBobAgent = async () => {\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label. It also sets the mediator invitation url,\n  // because this is most likely required in a mobile environment.\n  const config: InitConfig = {\n    label: "demo-agent-bob",\n    walletConfig: {\n      id: "mainBob",\n      key: "demoagentbob00000000000000000000",\n    },\n    autoAcceptConnections: true,\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-1\n\n// start-section-2\nconst initializeAcmeAgent = async () => {\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label.\n  const config: InitConfig = {\n    label: "demo-agent-acme",\n    walletConfig: {\n      id: "mainAcme",\n      key: "demoagentacme0000000000000000000",\n    },\n    autoAcceptConnections: true,\n    endpoints: ["http://localhost:3001"],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3001 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-2\n\n// start-section-3\nconst createNewInvitation = async (agent: Agent) => {\n  const outOfBandRecord = await agent.oob.createInvitation()\n\n  return {\n    invitationUrl: outOfBandRecord.outOfBandInvitation.toUrl({ domain: "https://example.org" }),\n    outOfBandRecord,\n  }\n}\n// end-section-3\n\n// start-section-4\nconst createLegacyInvitation = async (agent: Agent) => {\n  const { invitation } = await agent.oob.createLegacyInvitation()\n\n  return invitation.toUrl({ domain: "https://example.org" })\n}\n// end-section-4\n\n// start-section-5\nconst receiveInvitation = async (agent: Agent, invitationUrl: string) => {\n  const { outOfBandRecord } = await agent.oob.receiveInvitationFromUrl(invitationUrl)\n\n  return outOfBandRecord\n}\n// end-section-5\n\n// start-section-6\nconst setupConnectionListener = (agent: Agent, outOfBandRecord: OutOfBandRecord, cb: (...args: any) => void) => {\n  agent.events.on<ConnectionStateChangedEvent>(ConnectionEventTypes.ConnectionStateChanged, ({ payload }) => {\n    if (payload.connectionRecord.outOfBandId !== outOfBandRecord.id) return\n    if (payload.connectionRecord.state === DidExchangeState.Completed) {\n      // the connection is now ready for usage in other protocols!\n      console.log(`Connection for out-of-band id ${outOfBandRecord.id} completed`)\n\n      // Custom business logic can be included here\n      // In this example we can send a basic message to the connection, but\n      // anything is possible\n      cb()\n\n      // We exit the flow\n      process.exit(0)\n    }\n  })\n}\n\n// end-section-6\n\nconst run = async () => {\n  console.log("Initializing Bob agent...")\n  const bobAgent = await initializeBobAgent()\n  console.log("Initializing Acme agent...")\n  const acmeAgent = await initializeAcmeAgent()\n\n  console.log("Creating the invitation as Acme...")\n  const { outOfBandRecord, invitationUrl } = await createNewInvitation(acmeAgent)\n\n  console.log("Listening for connection changes...")\n  setupConnectionListener(acmeAgent, outOfBandRecord, () =>\n    console.log("We now have an active connection to use in the following tutorials")\n  )\n\n  console.log("Accepting the invitation as Bob...")\n  await receiveInvitation(bobAgent, invitationUrl)\n}\n\nvoid run()\n'},6414:function(n,e,t){"use strict";t.r(e),e.default='import {\n  InitConfig,\n  Agent,\n  WsOutboundTransport,\n  HttpOutboundTransport,\n  ConnectionEventTypes,\n  ConnectionStateChangedEvent,\n  DidExchangeState,\n  CredentialProtocolVersion,\n  AutoAcceptCredential,\n  CredentialEventTypes,\n  CredentialState,\n  CredentialStateChangedEvent,\n  OutOfBandRecord,\n} from "@aries-framework/core"\nimport { agentDependencies, HttpInboundTransport } from "@aries-framework/node"\nimport { Schema } from "indy-sdk"\nimport fetch from "node-fetch"\n\nconst getGenesisTransaction = async (url: string) => {\n  const response = await fetch(url)\n\n  return await response.text()\n}\n\n// start-section-1\nconst initializeHolderAgent = async () => {\n  const genesisTransactionsBCovrinTestNet = await getGenesisTransaction("http://test.bcovrin.vonx.io/genesis")\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label. It also sets the mediator invitation url,\n  // because this is most likely required in a mobile environment.\n  const config: InitConfig = {\n    label: "demo-agent-holder",\n    walletConfig: {\n      id: "demo-agent-holder",\n      key: "demoagentholder00000000000000000",\n    },\n    indyLedgers: [\n      {\n        id: "bcovin-test-net",\n        isProduction: false,\n        genesisTransactions: genesisTransactionsBCovrinTestNet,\n      },\n    ],\n    autoAcceptCredentials: AutoAcceptCredential.ContentApproved,\n    autoAcceptConnections: true,\n    endpoints: ["http://localhost:3002"],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3002 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-1\n\n// start-section-2\nconst initializeIssuerAgent = async () => {\n  const genesisTransactionsBCovrinTestNet = await getGenesisTransaction("http://test.bcovrin.vonx.io/genesis")\n  // Simple agent configuration. This sets some basic fields like the wallet\n  // configuration and the label.\n  const config: InitConfig = {\n    label: "demo-agent-issuer",\n    walletConfig: {\n      id: "demo-agent-issuer",\n      key: "demoagentissuer00000000000000000",\n    },\n    publicDidSeed: "demoissuerdidseed000000000000000",\n    indyLedgers: [\n      {\n        id: "bcovrin-test-net",\n        isProduction: false,\n        genesisTransactions: genesisTransactionsBCovrinTestNet,\n      },\n    ],\n    autoAcceptCredentials: AutoAcceptCredential.ContentApproved,\n    autoAcceptConnections: true,\n    endpoints: ["http://localhost:3001"],\n  }\n\n  // A new instance of an agent is created here\n  const agent = new Agent(config, agentDependencies)\n\n  // Register a simple `WebSocket` outbound transport\n  agent.registerOutboundTransport(new WsOutboundTransport())\n\n  // Register a simple `Http` outbound transport\n  agent.registerOutboundTransport(new HttpOutboundTransport())\n\n  // Register a simple `Http` inbound transport\n  agent.registerInboundTransport(new HttpInboundTransport({ port: 3001 }))\n\n  // Initialize the agent\n  await agent.initialize()\n\n  return agent\n}\n// end-section-2\n\n// start-section-3\nconst registerSchema = async (issuer: Agent) =>\n  issuer.ledger.registerSchema({ attributes: ["name", "age"], name: "Identity", version: "1.0" })\n// end-section-3\n\n// start-section-4\nconst registerCredentialDefinition = async (issuer: Agent, schema: Schema) =>\n  issuer.ledger.registerCredentialDefinition({ schema, supportRevocation: false, tag: "default" })\n// end-section-4\n\n// start-section-5\nconst setupCredentialListener = (holder: Agent) => {\n  holder.events.on<CredentialStateChangedEvent>(CredentialEventTypes.CredentialStateChanged, async ({ payload }) => {\n    switch (payload.credentialRecord.state) {\n      case CredentialState.OfferReceived:\n        console.log("received a credential")\n        // custom logic here\n        await holder.credentials.acceptOffer({ credentialRecordId: payload.credentialRecord.id })\n      case CredentialState.Done:\n        console.log(`Credential for credential id ${payload.credentialRecord.id} is accepted`)\n        // For demo purposes we exit the program here.\n        process.exit(0)\n    }\n  })\n}\n// end-section-5\n\n// start-section-6\nconst issueCredential = async (issuer: Agent, credentialDefinitionId: string, connectionId: string) =>\n  issuer.credentials.offerCredential({\n    protocolVersion: CredentialProtocolVersion.V1,\n    connectionId,\n    credentialFormats: {\n      indy: {\n        credentialDefinitionId,\n        attributes: [\n          { name: "name", value: "Jane Doe" },\n          { name: "age", value: "23" },\n        ],\n      },\n    },\n  })\n// end-section-6\n\nconst createNewInvitation = async (issuer: Agent) => {\n  const outOfBandRecord = await issuer.oob.createInvitation()\n\n  return {\n    invitationUrl: outOfBandRecord.outOfBandInvitation.toUrl({ domain: "https://example.org" }),\n    outOfBandRecord,\n  }\n}\n\nconst receiveInvitation = async (holder: Agent, invitationUrl: string) => {\n  const { outOfBandRecord } = await holder.oob.receiveInvitationFromUrl(invitationUrl)\n\n  return outOfBandRecord\n}\n\nconst setupConnectionListener = (\n  issuer: Agent,\n  outOfBandRecord: OutOfBandRecord,\n  cb: (...args: any) => Promise<unknown>\n) => {\n  issuer.events.on<ConnectionStateChangedEvent>(ConnectionEventTypes.ConnectionStateChanged, async ({ payload }) => {\n    if (payload.connectionRecord.outOfBandId !== outOfBandRecord.id) return\n    if (payload.connectionRecord.state === DidExchangeState.Completed) {\n      // the connection is now ready for usage in other protocols!\n      console.log(`Connection for out-of-band id ${outOfBandRecord.id} completed`)\n\n      // Custom business logic can be included here\n      // In this example we can send a basic message to the connection, but\n      // anything is possible\n      await cb(payload.connectionRecord.id)\n    }\n  })\n}\n\nconst flow = (issuer: Agent) => async (connectionId: string) => {\n  console.log("Registering the schema...")\n  const schema = await registerSchema(issuer)\n  console.log("Registering the credential definition...")\n  const credentialDefinition = await registerCredentialDefinition(issuer, schema)\n  console.log("Issuing the credential...")\n  await issueCredential(issuer, credentialDefinition.id, connectionId)\n}\n\nconst run = async () => {\n  console.log("Initializing the holder...")\n  const holder = await initializeHolderAgent()\n  console.log("Initializing the issuer...")\n  const issuer = await initializeIssuerAgent()\n\n  console.log("Initializing the credential listener...")\n  setupCredentialListener(holder)\n\n  console.log("Initializing the connection...")\n  const { outOfBandRecord, invitationUrl } = await createNewInvitation(issuer)\n  setupConnectionListener(issuer, outOfBandRecord, flow(issuer))\n  await receiveInvitation(holder, invitationUrl)\n}\n\nvoid run()\n'},9970:function(n,e,t){var i={"./create-a-connection":127,"./create-a-connection.ts":127,"./issue-a-credential":6414,"./issue-a-credential.ts":6414};function o(n){var e=a(n);return t(e)}function a(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=a,n.exports=o,o.id=9970}}]);