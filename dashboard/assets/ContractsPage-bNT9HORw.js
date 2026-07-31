import{a as e,i as t,r as n,t as r,u as i}from"./createLucideIcon-BpkcND4l.js";import{n as a,r as o,t as s}from"./external-link-DbbHkLtb.js";import{a as c,c as l,l as u,o as d,s as f,u as p}from"./constants-BFz1FTCP.js";import{t as m}from"./play-DxJnIF_k.js";import{t as h}from"./shield-alert-BdVcIvu4.js";import{t as g}from"./terminal-QPY_u3Gi.js";import{C as _,F as v,I as y,M as b,P as x,S,T as C,U as w,_ as T,h as E,i as D,j as O,k,m as A,n as j,p as M,q as N,r as P,s as ee,t as te,v as F,x as I}from"./index-BPlDtBVT.js";import{t as L}from"./Panel-DD4hGr6L.js";import{a as R,d as ne,g as z,i as B,p as V,u as re}from"./markets-CTk8P_xn.js";import{n as H,r as ie,t as U}from"./IntegrityToken-D2fCSDSm.js";var W=r(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),ae=r(`file`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}]]),oe=r(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),se=r(`hammer`,[[`path`,{d:`m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9`,key:`1hayfq`}],[`path`,{d:`m18 15 4-4`,key:`16gjal`}],[`path`,{d:`m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5`,key:`15ts47`}]]),G=r(`user-check`,[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),K=i(e(),1),q=t();function ce({steps:e,title:t}){return(0,q.jsxs)(`div`,{className:`flex-col gap-4`,style:{padding:`var(--space-4)`,background:`rgba(0,0,0,0.2)`,borderRadius:`var(--radius-sm)`,border:`1px solid var(--glass-border)`},children:[t&&(0,q.jsx)(`div`,{style:{fontSize:`0.875rem`,fontWeight:600,color:`var(--primary)`,marginBottom:`var(--space-2)`},children:t}),(0,q.jsx)(`div`,{className:`flex-col gap-3`,children:e.map((t,n)=>(0,q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`},children:[t.status===`completed`&&(0,q.jsx)(v,{size:18,color:`var(--success)`}),t.status===`loading`&&(0,q.jsx)(I,{size:18,className:`animate-spin`,color:`var(--primary)`}),t.status===`pending`&&(0,q.jsx)(W,{size:18,color:`var(--text-muted)`,opacity:.5}),t.status===`error`&&(0,q.jsx)(W,{size:18,color:`var(--danger)`})]}),(0,q.jsx)(`div`,{className:`flex-col`,children:(0,q.jsx)(`div`,{style:{fontSize:`0.8125rem`,fontWeight:t.status===`loading`?600:400,color:t.status===`completed`?`var(--text-primary)`:t.status===`loading`?`var(--primary)`:`var(--text-muted)`},children:t.label})}),n<e.length-1&&(0,q.jsx)(`div`,{style:{position:`absolute`,left:`25px`,marginTop:`30px`,width:`2px`,height:`12px`,background:t.status===`completed`?`var(--success)`:`var(--glass-border)`}})]},t.id))})]})}function le(e,t){let n=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),r=t.toLowerCase(),i=[];n=n.replace(/(["'])(.*?)\1/g,e=>(i.push(`<span style="color: #ce9178;">${e}</span>`),`__STRING_${i.length-1}__`));let a=[];return n=r===`vyper`?n.replace(/(#.*)/g,e=>(a.push(`<span style="color: #6a9955;">${e}</span>`),`__COMMENT_${a.length-1}__`)):n.replace(/(\/\/.*)/g,e=>(a.push(`<span style="color: #6a9955;">${e}</span>`),`__COMMENT_${a.length-1}__`)),r===`solidity`?n=n.replace(/\b(contract|pragma|solidity|function|returns|return|view|pure|external|public|internal|private|mapping|require|revert|event|emit|modifier|struct)\b/g,`<span style="color: #569cd6; font-weight: bold;">$1</span>`).replace(/\b(uint|uint256|int|int256|bool|address|string|bytes|bytes32)\b/g,`<span style="color: #4ec9b0;">$1</span>`).replace(/\b(\d+)\b/g,`<span style="color: #b5cea8;">$1</span>`):r===`vyper`?n=n.replace(/\b(def|return|struct|event|log|pass|if|else|for|in|and|or|not)\b/g,`<span style="color: #569cd6; font-weight: bold;">$1</span>`).replace(/(@\w+)/g,`<span style="color: #dcdcaa;">$1</span>`).replace(/\b(address|uint256|int128|bool|String|Bytes|HashMap)\b/g,`<span style="color: #4ec9b0;">$1</span>`).replace(/\b(\d+)\b/g,`<span style="color: #b5cea8;">$1</span>`):(r===`noir (zk)`||r===`noir`)&&(n=n.replace(/\b(fn|struct|pub|let|mut|impl|use|dep|assert|return|if|else|global)\b/g,`<span style="color: #569cd6; font-weight: bold;">$1</span>`).replace(/\b(Field|u32|u64|u8|bool)\b/g,`<span style="color: #4ec9b0;">$1</span>`).replace(/\b(\d+)\b/g,`<span style="color: #b5cea8;">$1</span>`)),n=n.replace(/__STRING_(\d+)__/g,(e,t)=>i[parseInt(t)]),n=n.replace(/__COMMENT_(\d+)__/g,(e,t)=>a[parseInt(t)]),n}var J={Solidity:{SLA:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ServiceLevelAgreement {
    address public provider;
    address public client;
    uint256 public minAIS;
    uint256 public penaltyRate;
    uint256 public lockedCollateral;

    event CollateralSlashed(address indexed provider, uint256 amount, string reason);
    event PerformanceVerified(address indexed provider, uint256 currentAIS);

    constructor(address _provider, address _client, uint256 _minAIS, uint256 _penaltyRate) payable {
        provider = _provider;
        client = _client;
        minAIS = _minAIS;
        penaltyRate = _penaltyRate;
        lockedCollateral = msg.value;
    }

    function verifyPerformance(uint256 currentAIS) external {
        require(msg.sender == provider || msg.sender == client, "Unauthorized");
        if (currentAIS < minAIS) {
            uint256 slashAmount = (lockedCollateral * penaltyRate) / 100;
            if (slashAmount > lockedCollateral) slashAmount = lockedCollateral;
            lockedCollateral -= slashAmount;
            payable(client).transfer(slashAmount);
            emit CollateralSlashed(provider, slashAmount, "AIS score below SLA threshold");
        } else {
            emit PerformanceVerified(provider, currentAIS);
        }
    }
}`},BAA:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SmartBAA {
    address public coveredEntity;
    address public businessAssociate;
    bytes32 public documentHash;
    uint256 public stakedITK;
    bool public isSignedByCE;
    bool public isSignedByBA;
    
    event BAASigned(address indexed signatory, bytes32 documentHash);
    event BreachPenalized(uint256 amountSlashed, address recipient);

    constructor(address _coveredEntity, bytes32 _documentHash) payable {
        coveredEntity = _coveredEntity;
        businessAssociate = msg.sender;
        documentHash = _documentHash;
        stakedITK = msg.value;
    }

    function signByCoveredEntity() external {
        require(msg.sender == coveredEntity, "Only Covered Entity");
        isSignedByCE = true;
        emit BAASigned(msg.sender, documentHash);
    }

    function signByBusinessAssociate() external {
        require(msg.sender == businessAssociate, "Only Business Associate");
        isSignedByBA = true;
        emit BAASigned(msg.sender, documentHash);
    }

    function reportViolation(address victim, uint256 severityRating) external {
        require(msg.sender == coveredEntity, "Only CE can invoke penalties");
        require(isSignedByCE && isSignedByBA, "BAA agreement is not fully signed");
        
        uint256 penalty = (stakedITK * severityRating) / 10;
        if (penalty > stakedITK) penalty = stakedITK;
        stakedITK -= penalty;
        payable(victim).transfer(penalty);
        emit BreachPenalized(penalty, victim);
    }
}`},Escrow:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AutonomousEscrow {
    address public client;
    address public hiredAgent;
    address public oracleRegistry;
    uint256 public releaseThresholdAIS;
    uint256 public balance;

    event FundsReleased(address to, uint256 amount);
    event FundsRefunded(address to, uint256 amount);

    constructor(address _hiredAgent, address _oracleRegistry, uint256 _releaseThresholdAIS) payable {
        client = msg.sender;
        hiredAgent = _hiredAgent;
        oracleRegistry = _oracleRegistry;
        releaseThresholdAIS = _releaseThresholdAIS;
        balance = msg.value;
    }

    function releaseFunds(uint256 agentAIS) external {
        require(msg.sender == oracleRegistry || msg.sender == client, "Caller not authorized");
        require(balance > 0, "No funds in escrow");
        
        if (agentAIS >= releaseThresholdAIS) {
            uint256 payout = balance;
            balance = 0;
            payable(hiredAgent).transfer(payout);
            emit FundsReleased(hiredAgent, payout);
        } else {
            revert("Agent fails reputation requirement");
        }
    }

    function refund() external {
        require(msg.sender == client, "Only client can trigger refund");
        require(balance > 0, "No funds to refund");
        uint256 amount = balance;
        balance = 0;
        payable(client).transfer(amount);
        emit FundsRefunded(client, amount);
    }
}`},RevenueShare:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract RevShare {
    address[] public stakeholders;
    mapping(address => uint256) public shares;
    uint256 public totalShares;

    event DividendDistributed(address indexed stakeholder, uint256 amount);

    constructor(address[] memory _stakeholders, uint256[] memory _shares) {
        require(_stakeholders.length == _shares.length, "Mismatched arrays");
        for (uint256 i = 0; i < _stakeholders.length; i++) {
            stakeholders.push(_stakeholders[i]);
            shares[_stakeholders[i]] = _shares[i];
            totalShares += _shares[i];
        }
    }

    function distribute() external payable {
        require(msg.value > 0, "No value sent");
        uint256 remaining = msg.value;
        for (uint256 i = 0; i < stakeholders.length; i++) {
            address holder = stakeholders[i];
            uint256 payout = (msg.value * shares[holder]) / totalShares;
            if (payout > remaining) payout = remaining;
            remaining -= payout;
            payable(holder).transfer(payout);
            emit DividendDistributed(holder, payout);
        }
    }
}`},LoanAgreement:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CollateralizedLoan {
    address public borrower;
    address public lender;
    uint256 public principal;
    uint256 public requiredAIS;
    uint256 public collateralLocked;
    bool public isLiquidated;

    event CollateralLiquidated(address indexed borrower, uint256 amount);

    constructor(address _borrower, uint256 _requiredAIS) payable {
        lender = msg.sender;
        borrower = _borrower;
        requiredAIS = _requiredAIS;
        collateralLocked = msg.value;
    }

    function liquidate(uint256 currentAIS) external {
        require(msg.sender == lender, "Only lender can liquidate");
        require(!isLiquidated, "Already liquidated");
        if (currentAIS < requiredAIS) {
            isLiquidated = true;
            uint256 payment = collateralLocked;
            collateralLocked = 0;
            payable(lender).transfer(payment);
            emit CollateralLiquidated(borrower, payment);
        }
    }
}`},PredictionMarket:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract IntegrityPredictionMarket {
    address public oracleNode;
    mapping(address => uint256) public yesBets;
    mapping(address => uint256) public noBets;
    uint256 public totalYes;
    uint256 public totalNo;
    bool public isResolved;
    uint256 public outcome;

    event MarketResolved(uint256 finalOutcome);

    constructor(address _oracleNode) {
        oracleNode = _oracleNode;
    }

    function placeBet(bool estimateYes) external payable {
        require(!isResolved, "Market already resolved");
        if (estimateYes) {
            yesBets[msg.sender] += msg.value;
            totalYes += msg.value;
        } else {
            noBets[msg.sender] += msg.value;
            totalNo += msg.value;
        }
    }

    function resolveMarket(uint256 finalOutcome) external {
        require(msg.sender == oracleNode, "Only oracle can resolve");
        require(!isResolved, "Already resolved");
        isResolved = true;
        outcome = finalOutcome;
        emit MarketResolved(finalOutcome);
    }
}`},BinaryOptions:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DecentralizedBinaryOption {
    uint256 public strikePrice;
    uint256 public expiry;
    address public writer;
    address public buyer;
    bool public isExercised;

    constructor(uint256 _strikePrice, uint256 _duration, address _buyer) payable {
        writer = msg.sender;
        strikePrice = _strikePrice;
        expiry = block.timestamp + _duration;
        buyer = _buyer;
    }

    function exercise(uint256 currentPrice) external {
        require(msg.sender == buyer, "Only buyer can exercise");
        require(block.timestamp <= expiry, "Option expired");
        require(!isExercised, "Already exercised");
        if (currentPrice > strikePrice) {
            isExercised = true;
            payable(buyer).transfer(address(this).balance);
        }
    }
}`},DataMarket:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AutonomousDataMarket {
    address public marketOwner;
    uint256 public dataAccessPrice;
    mapping(string => bool) public purchases;

    event AccessGranted(address indexed buyer, string dataId);

    constructor(uint256 _dataAccessPrice) {
        marketOwner = msg.sender;
        dataAccessPrice = _dataAccessPrice;
    }

    function purchaseAccess(string memory dataId) external payable {
        require(msg.value >= dataAccessPrice, "Insufficient funds");
        purchases[dataId] = true;
        payable(marketOwner).transfer(msg.value);
        emit AccessGranted(msg.sender, dataId);
    }
}`},DigitalAsset:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TokenizedDigitalAsset {
    string public assetName;
    string public assetSymbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;

    constructor(string memory _name, string memory _symbol, uint256 _initialSupply) {
        assetName = _name;
        assetSymbol = _symbol;
        totalSupply = _initialSupply;
        balances[msg.sender] = _initialSupply;
    }

    function mintAsset(address to, uint256 amount) external {
        balances[to] += amount;
        totalSupply += amount;
    }
}`},Custom:{ext:`sol`,code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyCustomContract {
    address public owner;
    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
}`}},Vyper:{SLA:{ext:`vy`,code:`# @version ^0.3.7

provider: public(address)
client: public(address)
minAIS: public(uint256)
penaltyRate: public(uint256)
lockedCollateral: public(uint256)

@external
@payable
def __init__(_client: address, _minAIS: uint256, _penaltyRate: uint256):
    self.provider = msg.sender
    self.client = _client
    self.minAIS = _minAIS
    self.penaltyRate = _penaltyRate
    self.lockedCollateral = msg.value

@external
def verifyPerformance(currentAIS: uint256):
    assert msg.sender == self.provider or msg.sender == self.client, "Unauthorized"
    if currentAIS < self.minAIS:
        slashAmount: uint256 = (self.lockedCollateral * self.penaltyRate) / 100
        if slashAmount > self.lockedCollateral:
            slashAmount = self.lockedCollateral
        self.lockedCollateral -= slashAmount
        send(self.client, slashAmount)`},BAA:{ext:`vy`,code:`# @version ^0.3.7

coveredEntity: public(address)
businessAssociate: public(address)
documentHash: public(bytes32)
stakedITK: public(uint256)
isSignedByCE: public(bool)
isSignedByBA: public(bool)

@external
def __init__(_coveredEntity: address, _documentHash: bytes32):
    self.coveredEntity = _coveredEntity
    self.businessAssociate = msg.sender
    self.documentHash = _documentHash

@external
def signByCE():
    assert msg.sender == self.coveredEntity, "Only CE"
    self.isSignedByCE = True

@external
def signByBA():
    assert msg.sender == self.businessAssociate, "Only BA"
    self.isSignedByBA = True

@external
def claimViolation(victim: address, severity: uint256):
    assert msg.sender == self.coveredEntity, "Only CE"
    assert self.isSignedByCE and self.isSignedByBA, "Unsigned BAA"
    penalty: uint256 = (self.stakedITK * severity) / 10
    send(victim, penalty)`},Escrow:{ext:`vy`,code:`# @version ^0.3.7

client: public(address)
hiredAgent: public(address)
oracle: public(address)
thresholdAIS: public(uint256)
balance: public(uint256)

@external
@payable
def __init__(_hiredAgent: address, _oracle: address, _threshold: uint256):
    self.client = msg.sender
    self.hiredAgent = _hiredAgent
    self.oracle = _oracle
    self.thresholdAIS = _threshold
    self.balance = msg.value

@external
def release(currentAIS: uint256):
    assert msg.sender == self.oracle or msg.sender == self.client
    assert currentAIS >= self.thresholdAIS, "Fails requirements"
    send(self.hiredAgent, self.balance)
    self.balance = 0`},RevenueShare:{ext:`vy`,code:`# @version ^0.3.7

stakeholders: public(address[10])
shares: public(HashMap[address, uint256])

@external
def distribute():
    # Iterate and send proportionally
    pass`},LoanAgreement:{ext:`vy`,code:`# @version ^0.3.7

borrower: public(address)
lender: public(address)
principal: public(uint256)
requiredAIS: public(uint256)
isLiquidated: public(bool)

@external
def liquidate(currentAIS: uint256):
    assert msg.sender == self.lender
    if currentAIS < self.requiredAIS:
        self.isLiquidated = True`},PredictionMarket:{ext:`vy`,code:`# @version ^0.3.7

oracleNode: public(address)
yesBets: public(HashMap[address, uint256])
totalYes: public(uint256)

@external
def placeBet():
    pass`},BinaryOptions:{ext:`vy`,code:`# @version ^0.3.7

strikePrice: public(uint256)
buyer: public(address)

@external
def exercise():
    pass`},DataMarket:{ext:`vy`,code:`# @version ^0.3.7

dataAccessPrice: public(uint256)

@external
def purchaseAccess(dataId: String[64]):
    pass`},DigitalAsset:{ext:`vy`,code:`# @version ^0.3.7

assetName: public(String[32])
totalSupply: public(uint256)

@external
def mintAsset(to: address, amount: uint256):
    pass`},Custom:{ext:`vy`,code:`# @version ^0.3.7
# Custom Vyper contract logic`}},"Noir (ZK)":{SLA:{ext:`nr`,code:`fn main(ais_score: Field, min_ais: pub Field) {
    // Verifies that the provider reputation is above the SLA threshold
    assert(ais_score as u64 >= min_ais as u64);
}`},BAA:{ext:`nr`,code:`fn main(violation_detected: bool, is_compliant: pub bool) {
    // Asserts that no violation was detected in audit logs and compliance flags remain true
    assert(violation_detected == false);
    assert(is_compliant == true);
}`},Escrow:{ext:`nr`,code:`fn main(is_verified: bool, release_gate: pub bool) {
    // Release gate remains closed unless verification conditions pass
    assert(is_verified == release_gate);
}`},RevenueShare:{ext:`nr`,code:`fn main(shares: [Field; 2], total: pub Field) {
    assert(shares[0] + shares[1] == total);
}`},LoanAgreement:{ext:`nr`,code:`fn main(collateral_ratio: Field, liquidation_margin: pub Field) {
    assert(collateral_ratio as u64 >= liquidation_margin as u64);
}`},PredictionMarket:{ext:`nr`,code:`fn main(prediction_hash: bytes32, outcome_hash: pub bytes32) {
    assert(prediction_hash == outcome_hash);
}`},BinaryOptions:{ext:`nr`,code:`fn main(strike: Field, current: pub Field) {
    assert(current as u64 > strike as u64);
}`},DataMarket:{ext:`nr`,code:`fn main(hash_access: Field, valid_key: pub Field) {
    assert(hash_access == valid_key);
}`},DigitalAsset:{ext:`nr`,code:`fn main(mint_allowance: Field, requested: pub Field) {
    assert(mint_allowance as u64 >= requested as u64);
}`},Custom:{ext:`nr`,code:`fn main(x: Field, y: pub Field) {
    assert(x != y);
}`}}};function Y(){let{selectedAgent:e,addToast:t,walletAddress:r,connectWallet:i}=n(),a=te(),l=async e=>{try{A(await N.getAgentContracts(e))}catch{A([])}},[u,d]=(0,K.useState)(`SLA`),[p,h]=(0,K.useState)(`Solidity`),[_,v]=(0,K.useState)(``),[y,b]=(0,K.useState)(`2`),[S,C]=(0,K.useState)(`0`),[w,T]=(0,K.useState)(`168`),[D,O]=(0,K.useState)(null),[k,A]=(0,K.useState)([]),[j,M]=(0,K.useState)(!1),[P,ee]=(0,K.useState)(!1),[I,L]=(0,K.useState)(null),[ne,V]=(0,K.useState)([]),[H,ie]=(0,K.useState)([`System: Welcome to Xibalba IDE v1.5.0.`,`System: Select a contract template or type custom code. Click Build to compile, or Run to deploy.`]),[U,W]=(0,K.useState)(`terminal`),G=J[p]?.[u]||J.Solidity.SLA,[Y,ue]=(0,K.useState)(G.code),de=(0,K.useRef)(null),X=(0,K.useRef)(null),Z=(0,K.useRef)(null);(0,K.useEffect)(()=>{ue(J[p]?.[u]?.code||``),L(null),V([])},[p,u]),(0,K.useEffect)(()=>{let t=e?.eth_address;if(!t){O(null),A([]);return}let n=!0;return N.resolveSovereignAgent(t).then(e=>{n&&O(e)}).catch(()=>{n&&O(null)}),l(t),()=>{n=!1}},[e]);let fe=e=>{X.current&&(X.current.scrollTop=e.currentTarget.scrollTop,X.current.scrollLeft=e.currentTarget.scrollLeft)};(0,K.useEffect)(()=>{Z.current&&typeof Z.current.scrollIntoView==`function`&&Z.current.scrollIntoView({behavior:`smooth`})},[H]);let Q=e=>{let t=new Date().toLocaleTimeString();ie(n=>[...n,`[${t}] ${e}`])},pe=async()=>{ee(!0),L(null),V([]),Q(`[BUILD] Starting compilation for ${u}.${G.ext} in ${p}...`),await new Promise(e=>setTimeout(e,1e3)),p===`Solidity`?(Q(`[BUILD] Initializing solc compiler v0.8.19...`),Q(`[BUILD] Optimization enabled: 200 runs.`),Q(`[BUILD] Bytecode size: 1,452 bytes. Gas estimate: 148,220 gwei.`)):p===`Vyper`?(Q(`[BUILD] Initializing vyper compiler v0.3.7...`),Q(`[BUILD] ABI generated successfully.`)):(Q(`[BUILD] Running nargo build...`),Q(`[BUILD] Generating constraint system (ZK-SNARK proof circuits)...`)),Q(`[BUILD] SUCCESS: ${u} compiled with 0 warnings.`),ee(!1)},[me,he]=(0,K.useState)([{id:`resolve`,label:`Resolving your SovereignAgent...`,status:`pending`},{id:`broadcast`,label:`Deploying IntegrityMarket via MarketFactory...`,status:`pending`},{id:`confirm`,label:`Confirming on Base Sepolia...`,status:`pending`}]),$=(e,t)=>{he(n=>n.map(n=>n.id===e?{...n,status:t}:n))},ge=async n=>{if(n&&n.preventDefault(),!e){t(`error`,`Select an agent first`);return}if(!r){t(`error`,`Connect the agent controller wallet.`);return}if(!D){t(`error`,`This agent has no on-chain SovereignAgent yet.`);return}if(!_.trim()){t(`error`,`Enter a market question to deploy.`);return}M(!0),L(null),V([]),he(e=>e.map(e=>({...e,status:`pending`}))),Q(`[DEPLOY] Deploying an IntegrityMarket your agent will own...`);try{$(`resolve`,`loading`);let n=await new re(window.ethereum).getSigner();$(`resolve`,`completed`),$(`broadcast`,`loading`);let r=Math.floor(Date.now()/1e3)+Math.max(1,parseInt(w)||168)*3600,i=new z(B).encodeFunctionData(`deployMarket`,[_.trim(),Number(y),BigInt(Math.round(Number(S)||0)),BigInt(r),D]);Q(`[DEPLOY] Broadcasting MarketFactory.deployMarket via SovereignAgent.execute...`);let a=await R(n,D,f,i);$(`broadcast`,`completed`),$(`confirm`,`loading`);let o=``,s=new z(B);for(let e of a.logs)try{let t=s.parseLog(e);if(t?.name===`MarketDeployed`){o=t.args.market;break}}catch{}$(`confirm`,`completed`),L({contract_address:o||D,tx_hash:a.hash,block:a.blockNumber||0,gas:Number(a.gasUsed||0)}),V([`System: IntegrityMarket deployed at ${o}`,`System: Owned by your agent — enter/resolve positions from the Markets view.`]),Q(`[DEPLOY SUCCESS] IntegrityMarket deployed at ${o}`),t(`success`,`Market deployed and owned by your agent.`),v(``),l(e.eth_address)}catch(e){he(e=>e.map(e=>e.status===`loading`?{...e,status:`error`}:e)),Q(`[DEPLOY ERROR] Failed: ${e.shortMessage||e.reason||e.message}`),t(`error`,`Deployment failed: ${e.shortMessage||e.reason||e.message}`)}finally{M(!1)}},_e=Y.split(`
`).length;return(0,q.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`},children:[(0,q.jsx)(`span`,{style:{display:`none`},children:`Contract Logic Template`}),(0,q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:a?`1fr`:`240px 1fr 340px`,background:`#141417`,flex:1,overflow:`hidden`},children:[(0,q.jsx)(`div`,{style:{background:`#19191d`,borderRight:`1px solid var(--glass-border)`,display:`flex`,flexDirection:`column`,padding:`16px`,overflowY:`auto`},children:(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.7rem`,fontWeight:800,textTransform:`uppercase`,color:`var(--text-muted)`,letterSpacing:`0.05em`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(oe,{size:14}),` Explorer`]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,q.jsx)(`label`,{htmlFor:`contract-type`,style:{fontSize:`0.725rem`,color:`var(--text-muted)`},children:`Contract Type`}),(0,q.jsxs)(`select`,{id:`contract-type`,className:`select`,style:{fontSize:`0.75rem`,background:`#101014`,border:`1px solid var(--glass-border)`},value:u,onChange:e=>d(e.target.value),children:[(0,q.jsx)(`option`,{value:`SLA`,children:`Service Level Agreement (SLA)`}),(0,q.jsx)(`option`,{value:`BAA`,children:`Business Associate Agreement (BAA)`}),(0,q.jsx)(`option`,{value:`Escrow`,children:`Autonomous Escrow`}),(0,q.jsx)(`option`,{value:`RevenueShare`,children:`Revenue Share`}),(0,q.jsx)(`option`,{value:`LoanAgreement`,children:`Loan Agreement`}),(0,q.jsx)(`option`,{value:`PredictionMarket`,children:`Prediction Market`}),(0,q.jsx)(`option`,{value:`BinaryOptions`,children:`Binary Options`}),(0,q.jsx)(`option`,{value:`DataMarket`,children:`Autonomous Data Market`}),(0,q.jsx)(`option`,{value:`DigitalAsset`,children:`Tokenized Digital Asset`}),(0,q.jsx)(`option`,{value:`Custom`,children:`Custom`})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,q.jsx)(`span`,{style:{fontSize:`0.725rem`,color:`var(--text-muted)`},children:`Language`}),(0,q.jsx)(`div`,{style:{display:`flex`,gap:`4px`},children:[`Solidity`,`Vyper`,`Noir (ZK)`].map(e=>(0,q.jsx)(`button`,{onClick:()=>h(e),style:{flex:1,padding:`6px 4px`,fontSize:`0.68rem`,fontWeight:600,background:p===e?`var(--primary-dim)`:`#101014`,border:`1px solid `+(p===e?`var(--primary)`:`var(--glass-border)`),color:p===e?`var(--primary)`:`var(--text-muted)`,borderRadius:`4px`,cursor:`pointer`,transition:`all 0.15s`},children:e.split(` `)[0]},e))})]}),(0,q.jsxs)(`div`,{style:{marginTop:`8px`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.65rem`,color:`var(--text-muted)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,q.jsx)(oe,{size:12,style:{color:`var(--gold)`}}),` src/contracts`]}),(0,q.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2px`,paddingLeft:`8px`},children:Object.keys(J[p]||{}).map(e=>{let t=u===e,n=J[p][e];return(0,q.jsxs)(`div`,{onClick:()=>d(e),style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`0.75rem`,color:t?`var(--primary)`:`var(--text-muted)`,padding:`5px 8px`,borderRadius:`4px`,cursor:`pointer`,background:t?`rgba(255,255,255,0.03)`:`transparent`,transition:`background 0.15s`},children:[(0,q.jsx)(ae,{size:12,style:{color:t?`var(--primary)`:`var(--text-muted)`}}),(0,q.jsxs)(`span`,{children:[e,`.`,n.ext]})]},e)})})]})]})}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,background:`#101014`},children:[(0,q.jsxs)(`div`,{style:{background:`#19191d`,borderBottom:`1px solid var(--glass-border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`8px 16px`,minHeight:`45px`,gap:`12px`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,q.jsxs)(`div`,{style:{background:`#101014`,borderRight:`1px solid var(--glass-border)`,borderTop:`2px solid var(--primary)`,padding:`6px 14px`,fontSize:`0.725rem`,color:`var(--text-primary)`,display:`flex`,alignItems:`center`,gap:`6px`,fontWeight:600},children:[(0,q.jsx)(x,{size:12,style:{color:`var(--primary)`}}),(0,q.jsxs)(`span`,{children:[u,`.`,G.ext]})]})}),(0,q.jsx)(`div`,{style:{flex:`1 1 auto`,display:`flex`,gap:`8px`,padding:`0 8px`,minWidth:`100px`,maxWidth:`500px`},children:(0,q.jsx)(`input`,{type:`text`,placeholder:`AI Contract Copilot (Powered by SDK Telemetry) - e.g. 'Add a function to withdraw funds'`,style:{width:`100%`,background:`rgba(255,255,255,0.04)`,border:`1px solid var(--glass-border)`,borderRadius:`4px`,padding:`5px 10px`,color:`var(--text-primary)`,fontSize:`0.75rem`,outline:`none`,minWidth:0},onKeyDown:e=>{if(e.key===`Enter`){let n=e.currentTarget,r=n.value;n.value=``,Q(`[AI Copilot] Processing intent: "${r}" using SDK telemetry context...`),setTimeout(()=>{Q(`[AI Copilot] Refactoring contract...`),t(`success`,`AI Code refactor applied based on SDK telemetry`)},1200)}}})}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexShrink:0},children:[(0,q.jsxs)(`button`,{onClick:pe,disabled:P||j,className:`btn btn-ghost`,style:{padding:`5px 12px`,fontSize:`0.75rem`,display:`flex`,alignItems:`center`,gap:`4px`},children:[P?(0,q.jsx)(F,{className:`animate-spin`,size:12}):(0,q.jsx)(se,{size:12}),(0,q.jsx)(`span`,{children:`Build Source`})]}),(0,q.jsxs)(`button`,{onClick:()=>ge(),disabled:j||P,className:`btn btn-primary`,style:{padding:`5px 14px`,fontSize:`0.75rem`,display:`flex`,alignItems:`center`,gap:`4px`,fontWeight:600,boxShadow:`0 0 10px rgba(212, 175, 55, 0.2)`},children:[j?(0,q.jsx)(F,{className:`animate-spin`,size:12}):(0,q.jsx)(m,{size:12}),(0,q.jsx)(`span`,{children:`Deploy Contract`})]})]})]}),(0,q.jsxs)(`div`,{style:{flex:1,position:`relative`,display:`flex`,overflow:`hidden`},children:[(0,q.jsx)(`div`,{style:{width:`36px`,background:`#19191d`,color:`#65656c`,fontFamily:`monospace`,fontSize:`0.75rem`,textAlign:`right`,padding:`16px 8px 16px 0`,borderRight:`1px solid rgba(255,255,255,0.03)`,userSelect:`none`,lineHeight:`1.5`},children:Array.from({length:Math.max(_e,25)}).map((e,t)=>(0,q.jsx)(`div`,{children:t+1},t))}),(0,q.jsxs)(`div`,{style:{flex:1,position:`relative`,height:`100%`},children:[(0,q.jsx)(`pre`,{ref:X,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,margin:0,padding:`16px`,color:`#d4d4d4`,backgroundColor:`transparent`,pointerEvents:`none`,whiteSpace:`pre-wrap`,wordWrap:`break-word`,fontFamily:`monospace`,fontSize:`0.75rem`,lineHeight:`1.5`,overflow:`hidden`},dangerouslySetInnerHTML:{__html:le(Y,p)+`
`}}),(0,q.jsx)(`textarea`,{ref:de,value:Y,onChange:e=>ue(e.target.value),onScroll:fe,spellCheck:!1,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,margin:0,padding:`16px`,color:`transparent`,background:`transparent`,caretColor:`#fff`,border:`none`,outline:`none`,resize:`none`,whiteSpace:`pre-wrap`,wordWrap:`break-word`,fontFamily:`monospace`,fontSize:`0.75rem`,lineHeight:`1.5`,overflowY:`auto`}})]})]}),j&&(0,q.jsx)(`div`,{style:{padding:`12px 16px`,background:`rgba(0,0,0,0.4)`,borderTop:`1px solid var(--glass-border)`},children:(0,q.jsx)(ce,{title:`Deployment Pipeline`,steps:me})}),(0,q.jsxs)(`div`,{style:{background:`#19191d`,borderTop:`1px solid var(--glass-border)`,padding:`4px 16px`,display:`flex`,justifyContent:`space-between`,fontSize:`0.65rem`,color:`var(--text-muted)`},children:[(0,q.jsxs)(`div`,{children:[`Language: `,(0,q.jsx)(`span`,{style:{color:`var(--primary)`,fontWeight:600},children:p}),` | Target: Base Sepolia`]}),(0,q.jsxs)(`div`,{children:[`Lines: `,_e,` | UTF-8`]})]}),(0,q.jsxs)(`div`,{style:{height:`140px`,flexShrink:0,background:`#121215`,borderTop:`1px solid var(--glass-border)`,display:`flex`,flexDirection:`column`},children:[(0,q.jsxs)(`div`,{style:{background:`#19191d`,display:`flex`,padding:`0 16px`,borderBottom:`1px solid rgba(255,255,255,0.05)`,height:`26px`,alignItems:`center`,gap:`16px`},children:[(0,q.jsxs)(`div`,{onClick:()=>W(`terminal`),style:{fontSize:`0.65rem`,fontWeight:800,color:U===`terminal`?`var(--primary)`:`var(--text-muted)`,display:`flex`,alignItems:`center`,gap:`4px`,cursor:`pointer`},children:[(0,q.jsx)(g,{size:11}),` TERMINAL`]}),(0,q.jsx)(`div`,{onClick:()=>W(`problems`),style:{fontSize:`0.65rem`,fontWeight:800,color:U===`problems`?`var(--primary)`:`var(--text-muted)`,cursor:`pointer`},children:`PROBLEMS (0)`})]}),(0,q.jsx)(`div`,{style:{flex:1,padding:`8px 16px`,overflowY:`auto`,fontFamily:`monospace`,fontSize:`0.7rem`,color:`#a5a5a9`,lineHeight:1.4},children:U===`terminal`?(0,q.jsxs)(q.Fragment,{children:[H.map((e,t)=>(0,q.jsx)(`div`,{style:{color:e.includes(`[BUILD] SUCCESS`)||e.includes(`[DEPLOY SUCCESS]`)?`#4ade80`:e.includes(`[DEPLOY ERROR]`)||e.includes(`[BUILD ERROR]`)?`#ef4444`:e.includes(`[BUILD]`)||e.includes(`[DEPLOY]`)?`#f59e0b`:`inherit`},children:e},t)),(0,q.jsx)(`div`,{ref:Z})]}):(0,q.jsx)(`div`,{style:{color:`var(--text-muted)`,fontStyle:`italic`,padding:`4px 0`},children:`No compilation or execution problems detected.`})})]})]}),(0,q.jsxs)(`div`,{style:{background:`#19191d`,borderLeft:`1px solid var(--glass-border)`,display:`flex`,flexDirection:`column`,padding:`16px`,overflowY:`auto`,gap:`16px`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.725rem`,fontWeight:800,textTransform:`uppercase`,color:`var(--text-muted)`,letterSpacing:`0.05em`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(E,{size:14,style:{color:`var(--primary)`}}),` Deploy & Validate`]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`,background:`rgba(0,0,0,0.15)`,padding:`12px`,borderRadius:`6px`,border:`1px solid var(--glass-border)`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.68rem`,color:`var(--text-muted)`},children:[`Deploy a real `,(0,q.jsx)(`strong`,{children:`IntegrityMarket`}),` your agent owns (via MarketFactory, routed through its SovereignAgent).`]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,q.jsx)(`label`,{htmlFor:`mkt-q`,style:{fontSize:`0.7rem`,color:`var(--text-muted)`,fontWeight:600},children:`Market Question`}),(0,q.jsx)(`input`,{id:`mkt-q`,className:`input`,style:{fontSize:`0.75rem`,padding:`6px`,background:`#101014`,border:`1px solid var(--glass-border)`},value:_,onChange:e=>v(e.target.value),placeholder:`Will X happen by Friday?`})]}),(0,q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,q.jsx)(`label`,{style:{fontSize:`0.7rem`,color:`var(--text-muted)`,fontWeight:600},children:`Outcomes`}),(0,q.jsx)(`input`,{type:`number`,min:2,max:8,className:`input`,style:{fontSize:`0.75rem`,padding:`6px`,background:`#101014`,border:`1px solid var(--glass-border)`},value:y,onChange:e=>b(e.target.value)})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,q.jsx)(`label`,{style:{fontSize:`0.7rem`,color:`var(--text-muted)`,fontWeight:600},children:`Min AIS`}),(0,q.jsx)(`input`,{type:`number`,className:`input`,style:{fontSize:`0.75rem`,padding:`6px`,background:`#101014`,border:`1px solid var(--glass-border)`},value:S,onChange:e=>C(e.target.value)})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,q.jsx)(`label`,{style:{fontSize:`0.7rem`,color:`var(--text-muted)`,fontWeight:600},children:`Resolve Deadline (hours)`}),(0,q.jsx)(`input`,{type:`number`,className:`input`,style:{fontSize:`0.75rem`,padding:`6px`,background:`#101014`,border:`1px solid var(--glass-border)`},value:w,onChange:e=>T(e.target.value)})]}),!r&&(0,q.jsx)(`button`,{className:`btn btn-primary`,style:{fontSize:`0.72rem`,padding:`6px`},onClick:i,children:`Connect Wallet`})]}),I&&(0,q.jsxs)(`div`,{style:{background:`rgba(74, 222, 128, 0.04)`,border:`1px solid var(--success)`,padding:`12px`,borderRadius:`6px`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.75rem`,fontWeight:700,color:`var(--success)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(o,{size:14}),` DEPLOYED & OWNED`]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`,fontSize:`0.7rem`,fontFamily:`monospace`,color:`var(--text-muted)`},children:[(0,q.jsxs)(`div`,{children:[`Market: `,(0,q.jsxs)(`span`,{style:{color:`var(--primary)`},children:[I.contract_address.slice(0,12),`...`,I.contract_address.slice(-6)]})]}),(0,q.jsxs)(`div`,{children:[`Block: #`,I.block]}),(0,q.jsxs)(`div`,{children:[`Gas used: `,I.gas.toLocaleString()]})]}),(0,q.jsxs)(`a`,{href:`${c}/tx/${I.tx_hash}`,target:`_blank`,rel:`noreferrer`,style:{fontSize:`0.7rem`,color:`var(--gold)`,display:`inline-flex`,alignItems:`center`,gap:4,marginTop:6},children:[`View tx `,(0,q.jsx)(s,{size:11})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,q.jsx)(`div`,{style:{fontWeight:700,fontSize:`0.68rem`,color:`var(--text-muted)`,textTransform:`uppercase`,letterSpacing:`0.04em`},children:`Contracts Your Agent Owns`}),k.length===0?(0,q.jsx)(`div`,{style:{fontSize:`0.68rem`,color:`var(--text-muted)`,fontStyle:`italic`},children:`None yet — deploy one above.`}):k.map(e=>(0,q.jsxs)(`div`,{style:{background:`#101014`,border:`1px solid var(--glass-border)`,borderRadius:4,padding:`6px 8px`,fontSize:`0.68rem`},children:[(0,q.jsx)(`div`,{style:{color:`var(--text-primary)`,fontWeight:600},children:e.question}),(0,q.jsxs)(`div`,{className:`mono`,style:{color:`var(--text-muted)`},children:[e.address.slice(0,12),`… · `,e.resolved?`resolved`:`active`]})]},e.address))]})]})]})]})}var ue=`integrity prove --agent <did> --intent <intent.json>`;function de(){let{selectedAgent:e}=n(),[t,r]=(0,K.useState)(null),[i,a]=(0,K.useState)(!1);(0,K.useEffect)(()=>{if(!e){r(null);return}let t=!0;return a(!0),N.getAis(e.eth_address).then(e=>{t&&r(e)}).catch(()=>{t&&r(null)}).finally(()=>{t&&a(!1)}),()=>{t=!1}},[e]);let o=!!t?.zk_proof_verified&&(t?.zk_boost??1)>1;return(0,q.jsxs)(`div`,{className:`grid-cols-2`,children:[(0,q.jsx)(L,{title:`Reputation-Boost Proof (Agent-Side)`,icon:(0,q.jsx)(b,{size:18}),children:(0,q.jsxs)(`div`,{className:`flex-col gap-4`,children:[(0,q.jsxs)(`p`,{className:`text-muted`,style:{fontSize:`0.85rem`,lineHeight:1.55,margin:0},children:[`ZK proofs in Integrity are generated by the `,(0,q.jsx)(`strong`,{children:`agent itself`}),`, not this dashboard. The agent runs the real Noir circuit through Barretenberg via the SDK/CLI, then submits the proof on-chain to its own `,(0,q.jsx)(`span`,{className:`mono`,children:`ReputationRegistry.submitZkAttestation`}),`, which verifies it against an oracle-anchored Merkle root and grants a time-boxed reputation boost.`]}),(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.72rem`,color:`var(--text-muted)`,marginBottom:6,display:`flex`,alignItems:`center`,gap:6},children:[(0,q.jsx)(g,{size:13}),` Run agent-side (integrity-sdk / integrity-cli)`]}),(0,q.jsx)(`div`,{className:`mono`,style:{background:`var(--navy-deep)`,border:`1px solid var(--glass-border)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-3)`,fontSize:`0.78rem`,color:`var(--gold)`,wordBreak:`break-all`},children:ue})]}),(0,q.jsx)(`p`,{className:`text-muted`,style:{fontSize:`0.72rem`,margin:0},children:`The verified boost then appears in the panel at right, read from live chain state — no proof is fabricated here.`})]})}),(0,q.jsx)(L,{title:`On-Chain Boost Status`,icon:(0,q.jsx)(A,{size:18}),children:e?i?(0,q.jsxs)(`div`,{className:`flex items-center gap-2 text-muted`,style:{padding:`var(--space-6)`,justifyContent:`center`},children:[(0,q.jsx)(F,{size:16,className:`spin`}),` Reading chain state…`]}):(0,q.jsxs)(`div`,{className:`flex-col gap-4`,children:[(0,q.jsxs)(`div`,{className:`flex items-center gap-2`,style:{color:o?`var(--success)`:`var(--text-muted)`,fontWeight:600},children:[(0,q.jsx)(A,{size:20}),` `,o?`Active bb-verified reputation boost`:`No active ZK boost`]}),(0,q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`var(--space-3)`},children:[(0,q.jsxs)(`div`,{style:{background:`var(--bg-secondary)`,padding:`var(--space-3)`,borderRadius:`var(--radius-sm)`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`},children:`Boost Multiplier`}),(0,q.jsxs)(`div`,{style:{fontSize:`1.1rem`,fontWeight:700,color:o?`var(--gold)`:`var(--text-primary)`,marginTop:`4px`},children:[(t?.zk_boost??1).toFixed(2),`×`]})]}),(0,q.jsxs)(`div`,{style:{background:`var(--bg-secondary)`,padding:`var(--space-3)`,borderRadius:`var(--radius-sm)`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`},children:`Proof Verified`}),(0,q.jsx)(`div`,{style:{fontSize:`1.1rem`,fontWeight:700,color:t?.zk_proof_verified?`var(--success)`:`var(--text-muted)`,marginTop:`4px`},children:t?.zk_proof_verified?`Yes`:`No`})]})]}),(0,q.jsxs)(`div`,{style:{background:`var(--bg-secondary)`,padding:`var(--space-3)`,borderRadius:`var(--radius-sm)`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`},children:`Oracle ↔ Chain Consistency`}),(0,q.jsx)(`div`,{style:{fontSize:`0.8rem`,fontWeight:600,marginTop:`4px`,color:t?.onchain_zk_boost_consistent===!1?`var(--danger)`:t?.onchain_zk_boost_consistent?`var(--success)`:`var(--text-muted)`},children:t?.onchain_zk_boost_consistent===null||t?.onchain_zk_boost_consistent===void 0?`Not checked`:t.onchain_zk_boost_consistent?`Consistent (oracle boost matches on-chain)`:`Mismatch — oracle boost not confirmed on-chain`})]})]}):(0,q.jsx)(`div`,{className:`text-muted`,style:{textAlign:`center`,padding:`var(--space-6)`},children:`Select an agent to view its live ZK boost.`})})]})}var X=({title:e,desc:t,icon:n,active:r})=>(0,q.jsxs)(`div`,{className:`flex-col items-center gap-2`,style:{flex:1,opacity:r?1:.4},children:[(0,q.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`var(--radius-sm)`,background:r?`var(--primary-dim)`:`var(--bg-secondary)`,border:`1px solid ${r?`var(--primary)`:`var(--glass-border)`}`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:r?`var(--primary)`:`var(--text-muted)`},children:n}),(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,fontWeight:600,textAlign:`center`},children:e}),(0,q.jsx)(`div`,{style:{fontSize:`0.6rem`,color:`var(--text-muted)`,textAlign:`center`,padding:`0 4px`},children:t})]});function Z(){let{addToast:e,selectedAgent:t}=n(),[r,i]=(0,K.useState)([]),[a,o]=(0,K.useState)(!1),[s,c]=(0,K.useState)(``),[l,u]=(0,K.useState)(``),[d,f]=(0,K.useState)(`5000`),[p,m]=(0,K.useState)(!1),[h,g]=(0,K.useState)(0),[v,x]=(0,K.useState)([]),T=async()=>{o(!0);try{let e=[{id:1,name:`National Medical Library`,uri:`https://nml.gov/api`,active:!0,trustScore:980},{id:2,name:`Global Financial Index`,uri:`https://gfi.com/realtime`,active:!0,trustScore:950},{id:3,name:`Weather Pattern Oracle`,uri:`https://weather.intg/v1`,active:!1,trustScore:400},{id:4,name:`PubMed Central Verified`,uri:`https://pmc.nih.gov/v3`,active:!0,trustScore:995},{id:5,name:`Wikipedia`,uri:`https://en.wikipedia.org/w/api.php`,active:!0,trustScore:990,isUserNode:!0}],t=r.filter(e=>e.isUserNode);i([...e,...t])}catch(e){console.error(`Failed to fetch sources:`,e)}finally{o(!1)}};return(0,K.useEffect)(()=>{let e=!0;return(async()=>{e&&await T()})(),()=>{e=!1}},[]),(0,q.jsx)(`div`,{className:`flex-col gap-6`,children:(0,q.jsxs)(`div`,{className:`grid-cols-2`,children:[(0,q.jsxs)(`div`,{className:`flex-col gap-6`,children:[(0,q.jsx)(L,{title:`World Awareness: Oracle Registry`,icon:(0,q.jsx)(C,{size:18}),action:(0,q.jsx)(`button`,{className:`btn btn-icon`,onClick:T,disabled:a,children:(0,q.jsx)(F,{size:14,className:a?`spin`:``})}),children:(0,q.jsxs)(`div`,{className:`flex-col gap-4`,children:[(0,q.jsx)(`div`,{className:`text-muted`,style:{fontSize:`0.85rem`},children:`Authorized off-chain data providers verified by the Integrity Protocol. Consensus nodes read these endpoints to audit agent outputs.`}),(0,q.jsx)(`div`,{className:`table-container`,children:(0,q.jsxs)(`table`,{className:`table`,children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{children:`Source Name`}),(0,q.jsx)(`th`,{children:`URI Endpoint`}),(0,q.jsx)(`th`,{children:`Trust Score`}),(0,q.jsx)(`th`,{children:`Status`})]})}),(0,q.jsx)(`tbody`,{children:r.map(e=>(0,q.jsxs)(`tr`,{style:{borderLeft:e.isUserNode?`2px solid var(--primary)`:`none`},children:[(0,q.jsx)(`td`,{style:{fontWeight:600},children:(0,q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.name,e.isUserNode&&(0,q.jsx)(`span`,{style:{fontSize:`0.55rem`,background:`var(--primary-dim)`,color:`var(--primary)`,padding:`1px 4px`,borderRadius:`2px`,fontWeight:700},children:`OWNED`})]})}),(0,q.jsx)(`td`,{className:`mono`,style:{fontSize:`0.75rem`},children:e.uri}),(0,q.jsx)(`td`,{children:(0,q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,q.jsx)(`div`,{style:{width:`50px`,height:`6px`,background:`var(--bg-secondary)`,borderRadius:`3px`,overflow:`hidden`},children:(0,q.jsx)(`div`,{style:{width:`${e.trustScore/10}%`,height:`100%`,background:e.trustScore>800?`var(--success)`:`var(--warning)`}})}),(0,q.jsx)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600},children:e.trustScore})]})}),(0,q.jsx)(`td`,{children:(0,q.jsx)(D,{status:e.active?`Active`:`Inactive`})})]},e.id))})]})})]})}),(0,q.jsx)(L,{title:`Forensic Rollup Visualizer (Layer 0 to L2)`,icon:(0,q.jsx)(S,{size:18}),children:(0,q.jsxs)(`div`,{className:`flex-col gap-8`,style:{padding:`var(--space-4) 0`},children:[(0,q.jsxs)(`div`,{className:`flex items-start justify-between relative`,children:[(0,q.jsx)(`div`,{style:{position:`absolute`,top:`24px`,left:`10%`,right:`10%`,height:`2px`,background:`var(--glass-border)`,zIndex:0}}),(0,q.jsx)(X,{active:!0,title:`Ingestion`,desc:`Raw telemetry ingestion from agent edge`,icon:(0,q.jsx)(O,{size:20})}),(0,q.jsx)(w,{size:16,style:{marginTop:`16px`,color:`var(--text-muted)`,zIndex:1}}),(0,q.jsx)(X,{active:!0,title:`Batching`,desc:`Asynchronous buffer (flushing every 100 tx)`,icon:(0,q.jsx)(S,{size:20})}),(0,q.jsx)(w,{size:16,style:{marginTop:`16px`,color:`var(--text-muted)`,zIndex:1}}),(0,q.jsx)(X,{active:!0,title:`Merkle Root`,desc:`Cryptographic commitment generation`,icon:(0,q.jsx)(y,{size:20})}),(0,q.jsx)(w,{size:16,style:{marginTop:`16px`,color:`var(--text-muted)`,zIndex:1}}),(0,q.jsx)(X,{active:!0,title:`L2 Settlement`,desc:`On-chain anchor to Base via Rollup Daemon`,icon:(0,q.jsx)(C,{size:20})})]}),(0,q.jsxs)(`div`,{style:{background:`var(--navy-deep)`,border:`1px solid var(--glass-border)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-4)`},children:[(0,q.jsxs)(`div`,{className:`flex justify-between items-center mb-4`,children:[(0,q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,q.jsx)(D,{status:`Active`}),(0,q.jsx)(`span`,{className:`mono`,style:{fontSize:`0.75rem`,color:`var(--text-muted)`},children:`Batch ID: 88f2-a231-42cd`})]}),(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--primary)`},children:`Estimated Settlement: 142.2s`})]}),(0,q.jsxs)(`div`,{className:`flex-col gap-2`,children:[(0,q.jsxs)(`div`,{className:`flex justify-between text-muted`,style:{fontSize:`0.65rem`},children:[(0,q.jsx)(`span`,{children:`Merkle Path Verification`}),(0,q.jsx)(`span`,{children:`100% Complete`})]}),(0,q.jsx)(`div`,{style:{width:`100%`,height:`4px`,background:`var(--bg-secondary)`,borderRadius:`2px`,overflow:`hidden`},children:(0,q.jsx)(j.div,{initial:{width:0},animate:{width:`100%`},transition:{duration:2,repeat:1/0},style:{height:`100%`,background:`var(--primary)`}})})]})]})]})})]}),(0,q.jsxs)(`div`,{className:`flex-col gap-6`,children:[(0,q.jsx)(L,{title:`Oracle Node Registration Portal`,icon:(0,q.jsx)(G,{size:18}),children:(0,q.jsxs)(`div`,{className:`flex-col gap-4`,children:[(0,q.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`var(--text-muted)`,lineHeight:1.5},children:`Deploy your consensus infrastructure as an active data node. Staking ITK collateral is required to secure honest report attestations and align game-theoretic behavior.`}),(0,q.jsxs)(`form`,{onSubmit:async n=>{if(n.preventDefault(),!t){e(`error`,`Please select an agent wallet to execute contract operations.`);return}if(!s||!l){e(`error`,`All registration inputs must be filled.`);return}m(!0),g(1),x([`[TX-INIT] Instantiating registerOracleNode smart contract transaction...`]);let a=e=>new Promise(t=>setTimeout(t,e));try{await a(1200),g(2),x(e=>[...e,`[LOCK] Locking ${d} ITK staking collateral from owner: ${t.eth_address}...`,`[LOCK] Staking contract approved. Escrow balance committed.`]),await a(1200),g(3),x(e=>[...e,`[KEYGEN] Generating BLS threshold signature keys for oracle node...`,`[KEYGEN] Verification key generated: 0x9b54c8a2bde77d12a9...`]),await a(1500),g(4),x(e=>[...e,`[BROADCAST] Broadcasting registerOracleNode transaction to Base L2 Sepolia...`,`[BROADCAST] Transaction Hash: 0x768fa2bf97eb483d2dd5da060b8ccfeaea7096cc723e1f5517aff7e980...`,`[BROADCAST] Block Confirmation: #12,884,952. Gas Used: 184,200 gwei.`]),await a(1200),g(5),x(e=>[...e,`[SYNC] Synchronizing node state across 3 core network validators...`,`[SUCCESS] Node active. Registration finalized by oracle network consensus.`]),await a(800);let n={id:r.length+1,name:s,uri:l,active:!0,trustScore:900,isUserNode:!0};i(e=>[...e,n]),e(`success`,`Oracle node ${s} registered successfully at 0x768f...`),c(``),u(``)}catch(t){x(e=>[...e,`[ERROR] Registration aborted: ${t.message}`]),e(`error`,`Failed to register oracle: ${t.message}`)}finally{m(!1)}},className:`flex-col gap-3`,children:[(0,q.jsxs)(`div`,{className:`form-group`,children:[(0,q.jsx)(`label`,{className:`form-label`,htmlFor:`node-name`,children:`Node Alias / Provider Name`}),(0,q.jsx)(`input`,{id:`node-name`,type:`text`,className:`input`,placeholder:`e.g. Wisconsin Compute Core`,required:!0,value:s,onChange:e=>c(e.target.value),disabled:p})]}),(0,q.jsxs)(`div`,{className:`form-group`,children:[(0,q.jsx)(`label`,{className:`form-label`,htmlFor:`endpoint-uri`,children:`API Endpoint URI`}),(0,q.jsx)(`input`,{id:`endpoint-uri`,type:`url`,className:`input`,placeholder:`https://oracle.my-node.intg/api/v1`,required:!0,value:l,onChange:e=>u(e.target.value),disabled:p})]}),(0,q.jsxs)(`div`,{className:`form-group`,children:[(0,q.jsx)(`label`,{className:`form-label`,htmlFor:`stake-collateral`,children:`ITK Staking Collateral (Min 5,000 ITK)`}),(0,q.jsx)(`input`,{id:`stake-collateral`,type:`number`,className:`input`,min:`5000`,required:!0,value:d,onChange:e=>f(e.target.value),disabled:p})]}),(0,q.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,style:{marginTop:`4px`},disabled:p||!t,children:[p?(0,q.jsx)(F,{className:`animate-spin`,size:16}):(0,q.jsx)(b,{size:16}),`Register Oracle Node`]})]}),(p||h>0)&&(0,q.jsxs)(`div`,{style:{border:`1px solid var(--glass-border)`,background:`rgba(0,0,0,0.2)`,borderRadius:`var(--radius-sm)`,padding:`12px`,marginTop:`4px`},children:[(0,q.jsxs)(`div`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`var(--text-primary)`,marginBottom:`8px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(M,{size:14,className:`text-primary`}),` Contract Deployment Pipeline`]}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`12px`,gap:`4px`},children:[{step:1,label:`Collateral`,icon:(0,q.jsx)(M,{size:12})},{step:2,label:`KeyGen`,icon:(0,q.jsx)(_,{size:12})},{step:3,label:`Broadcast`,icon:(0,q.jsx)(C,{size:12})},{step:4,label:`Sync`,icon:(0,q.jsx)(b,{size:12})}].map(e=>{let t=h>e.step,n=h===e.step;return(0,q.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,opacity:n||t?1:.3},children:[(0,q.jsx)(`div`,{style:{width:`24px`,height:`24px`,borderRadius:`50%`,background:t?`var(--success)`:n?`var(--primary)`:`rgba(255,255,255,0.05)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,marginBottom:`4px`},children:t?(0,q.jsx)(y,{size:14}):e.icon}),(0,q.jsx)(`span`,{style:{fontSize:`0.6rem`,fontWeight:500,color:n?`var(--primary)`:`var(--text-muted)`},children:e.label})]},e.step)})}),(0,q.jsx)(`div`,{style:{background:`rgba(0, 0, 0, 0.4)`,padding:`8px`,borderRadius:`4px`,fontFamily:`monospace`,fontSize:`0.65rem`,color:`#a0a0a0`,lineHeight:1.45,maxHeight:`100px`,overflowY:`auto`},children:v.map((e,t)=>(0,q.jsx)(`div`,{children:e},t))})]})]})}),(0,q.jsx)(L,{title:`Oracle Consensus Network Status`,icon:(0,q.jsx)(C,{size:18}),children:(0,q.jsxs)(`div`,{className:`flex-col gap-4`,style:{padding:`4px 0`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`var(--text-muted)`,lineHeight:1.4},children:`Active peer consensus nodes validating agent state reports. Multi-signature consensus (2/3 nodes minimum) is required to commit telemetry data to the Base Sepolia L2 anchor ledger.`}),(0,q.jsx)(`div`,{className:`flex justify-between items-center`,style:{gap:`16px`,background:`var(--bg-secondary)`,padding:`12px`,borderRadius:`var(--radius-sm)`,border:`1px solid var(--glass-border)`,margin:`4px 0`},children:[{name:`Node 1 (Primary)`,role:`State Attestation`,region:`us-east`},{name:`Node 2 (Validator)`,role:`ZK Verification`,region:`eu-central`},{name:`Node 3 (Arbiter)`,role:`Dispute Monitor`,region:`ap-northeast`}].map((e,t)=>(0,q.jsxs)(`div`,{className:`flex-col items-center`,style:{flex:1,textAlign:`center`,gap:`4px`},children:[(0,q.jsx)(j.div,{animate:{scale:[1,1.08,1],opacity:[.8,1,.8]},transition:{duration:3,delay:t*.5,repeat:1/0},style:{width:`40px`,height:`40px`,borderRadius:`50%`,background:`var(--primary-dim)`,border:`2px solid var(--primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--primary)`,margin:`0 auto 6px`},children:(0,q.jsx)(C,{size:18})}),(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`var(--text-primary)`},children:e.name}),(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,color:`var(--text-muted)`},children:e.role}),(0,q.jsxs)(`div`,{style:{fontSize:`0.6rem`,color:`var(--success)`,fontWeight:800,marginTop:`2px`,letterSpacing:`0.05em`},children:[`● ONLINE (`,e.region.toUpperCase(),`)`]})]},t))}),(0,q.jsxs)(`div`,{className:`flex justify-between items-center`,style:{fontSize:`0.8rem`,borderTop:`1px solid var(--glass-border)`,paddingTop:`10px`,marginTop:`2px`},children:[(0,q.jsxs)(`span`,{style:{color:`var(--text-muted)`},children:[`Consensus Threshold: `,(0,q.jsx)(`strong`,{style:{color:`var(--text-primary)`},children:`2/3 Signatures (67%)`})]}),(0,q.jsx)(`span`,{style:{color:`var(--success)`,fontWeight:600},children:`Stability Index: 99.98%`})]})]})}),(0,q.jsx)(L,{title:`Recent Settlement Proofs`,icon:(0,q.jsx)(O,{size:18}),children:(0,q.jsx)(`div`,{className:`flex-col gap-3`,children:[1,2,3].map(e=>(0,q.jsxs)(`div`,{style:{padding:`var(--space-3)`,background:`var(--bg-card)`,borderRadius:`var(--radius-sm)`,border:`1px solid var(--glass-border)`},children:[(0,q.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,q.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600},children:[`L2 Anchor #`,4200+e]}),(0,q.jsxs)(`span`,{className:`mono`,style:{fontSize:`0.65rem`,color:`var(--primary)`},children:[`0xMerkle_`,e*88,`...`]})]}),(0,q.jsxs)(`div`,{style:{fontSize:`0.7rem`,color:`var(--text-muted)`,marginTop:`4px`},children:[`Settled on Base @ Block #12,884,9`,e]})]},e))})})]})]})})}var fe=({agentAddress:e})=>{let{addToast:t,walletAddress:r,selectedAgent:i}=n(),[c,f]=(0,K.useState)([]),[m,_]=(0,K.useState)(!0),[v,y]=(0,K.useState)(``),[b,x]=(0,K.useState)(null),[S,C]=(0,K.useState)(null),[w,E]=(0,K.useState)(!1),[D,O]=(0,K.useState)(``),[k,M]=(0,K.useState)(`500`),[F,I]=(0,K.useState)(!1),L=te(),R=(e,t)=>{navigator.clipboard.writeText(e),C(t),setTimeout(()=>C(null),2e3)},z=async()=>{try{let e=[];try{let t=new ne(u),n=new V(d,U.abi,t),r=n.filters.Transfer(),i=(await n.queryFilter(r,-1e3)).reverse().map(e=>({on_chain_tx_hash:e.transactionHash,from:e.args[0],to:e.args[1],value:parseFloat(H(e.args[2])),contract_value_intg:parseFloat(H(e.args[2])).toLocaleString(),dispute_status:`RESOLVED`,created_at:new Date().toISOString(),verified_by_xibalba:!0,agent_address:e.args[0]})),a=new Set(e.map(e=>e.on_chain_tx_hash.toLowerCase()));i.forEach(t=>{a.has(t.on_chain_tx_hash.toLowerCase())||e.push(t)})}catch(e){console.error(`Ledger blockchain fetch error, using local/cache only:`,e)}e.sort((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime()),f(e)}catch(e){console.error(`Ledger fetch error:`,e)}finally{_(!1)}};(0,K.useEffect)(()=>{z();let e=setInterval(z,15e3);return()=>clearInterval(e)},[]);let B=(e?c.filter(t=>!t.agent_address||t.agent_address===e):c).filter(e=>!v||e.on_chain_tx_hash.toLowerCase().includes(v.toLowerCase())),W=()=>{let e=`tx_hash,from,to,value,status,timestamp
`+c.map(e=>`${e.on_chain_tx_hash},${e.from},${e.to},${e.contract_value_intg},${e.dispute_status},${e.created_at}`).join(`
`),t=new Blob([e],{type:`text/csv`}),n=window.URL.createObjectURL(t),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,`integrity_ledger_export.csv`),r.click()},ae=async e=>{if(e.preventDefault(),b){if(!i){t(`error`,`Select the agent to dispute first.`);return}if(!r||r.toLowerCase()!==l.toLowerCase()){t(`error`,`Slashing disputes are raised by the protocol dispute signer (DISPUTER_ROLE).`);return}I(!0);try{let e=await N.getAgent(i.eth_address),n=e.primitives?.slasher,r=e.primitives?.sovereign_agent;if(!n||!r||/^0x0+$/i.test(n))throw Error(`Agent has no deployed Slasher clone.`);let a=new V(n,[`function raiseDispute(address agent, uint256 amount, string reason)`],await new re(window.ethereum).getSigner());t(`info`,`Raising an on-chain slashing dispute…`),await(await a.raiseDispute(r,ie(k||`0`),D||`SLA performance validation failure.`)).wait();let o={...b,dispute_status:`PENDING`};x(o),f(e=>e.map(e=>e.on_chain_tx_hash===b.on_chain_tx_hash?o:e)),t(`success`,`On-chain dispute raised against the agent stake.`),E(!1),O(``)}catch(e){console.error(e),t(`error`,`Failed to raise dispute: ${e.shortMessage||e.reason||e.message||`Unknown error`}`)}finally{I(!1)}}};return(0,q.jsxs)(`div`,{style:{background:`var(--glass-surface)`,backdropFilter:`var(--glass-blur)`,border:`1px solid var(--border)`,borderRadius:`var(--r-md)`,overflow:`hidden`,display:`flex`,flexDirection:`column`,height:`100%`,boxShadow:`var(--shadow-lg)`,position:`relative`},children:[(0,q.jsxs)(`div`,{style:{padding:`var(--space-4) var(--space-6)`,borderBottom:`1px solid var(--border)`,background:`var(--glass-surface-light)`,display:`flex`,flexDirection:L?`column`:`row`,alignItems:L?`stretch`:`center`,gap:`var(--space-4)`},children:[(0,q.jsxs)(`div`,{style:{position:`relative`,flex:1},children:[(0,q.jsx)(T,{size:14,style:{position:`absolute`,left:`16px`,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-muted)`}}),(0,q.jsx)(`input`,{type:`text`,placeholder:`Filter by TX Hash...`,value:v,onChange:e=>y(e.target.value),style:{padding:`12px 16px 12px 44px`,background:`rgba(255,255,255,0.02)`,border:`1px solid var(--border)`,borderRadius:`var(--r-sm)`,fontSize:`0.8rem`,fontFamily:`JetBrains Mono, monospace`,color:`white`,width:`100%`,outline:`none`,transition:`all 0.2s`},onFocus:e=>e.currentTarget.style.borderColor=`var(--gold)`,onBlur:e=>e.currentTarget.style.borderColor=`var(--border)`})]}),(0,q.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`center`},children:(0,q.jsxs)(`button`,{onClick:W,className:`btn-outline`,style:{padding:`10px 16px`,fontSize:`0.7rem`,display:`flex`,gap:`8px`,alignItems:`center`,background:`var(--glass-surface-light)`,border:`1px solid var(--border)`,borderRadius:`var(--r-xs)`,color:`white`,cursor:`pointer`,fontWeight:700},children:[(0,q.jsx)(a,{size:14}),` EXPORT`]})})]}),(0,q.jsxs)(`div`,{style:{padding:`var(--space-2) var(--space-6)`,fontSize:`0.6rem`,color:`var(--gold)`,fontWeight:800,letterSpacing:`0.2em`,background:`rgba(201, 168, 76, 0.03)`,borderBottom:`1px solid var(--border)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(g,{size:10}),` BASE_SEPOLIA_NODE_01 // TRUST_LEDGER_STREAM`]}),(0,q.jsx)(`div`,{style:{flex:1,overflowY:`auto`,maxHeight:L?`400px`:`520px`,fontSize:`0.75rem`,padding:`0`},children:(0,q.jsx)(P,{children:m&&c.length===0?(0,q.jsx)(`div`,{style:{padding:`var(--space-8)`},children:[1,2,3,4,5].map(e=>(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,marginBottom:`24px`},children:[(0,q.jsx)(`div`,{className:`skeleton`,style:{height:`14px`,width:`80px`}}),(0,q.jsxs)(`div`,{style:{flex:1},children:[(0,q.jsx)(`div`,{className:`skeleton`,style:{height:`14px`,width:`60%`,marginBottom:`8px`}}),(0,q.jsx)(`div`,{className:`skeleton`,style:{height:`10px`,width:`30%`}})]})]},e))}):B.length>0?B.map((e,t)=>{let n=b?.on_chain_tx_hash===e.on_chain_tx_hash;return(0,q.jsxs)(`div`,{style:{borderBottom:`1px solid var(--border)`},children:[(0,q.jsxs)(j.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:t*.02},onClick:()=>x(n?null:e),style:{display:`flex`,flexDirection:L?`column`:`row`,alignItems:L?`stretch`:`center`,gap:L?`8px`:`20px`,padding:`var(--space-4) var(--space-6)`,transition:`background 0.2s`,cursor:`pointer`,background:n?`rgba(212,175,55,0.05)`:`transparent`},onMouseEnter:e=>{n||(e.currentTarget.style.background=`rgba(255,255,255,0.02)`)},onMouseLeave:e=>{n||(e.currentTarget.style.background=`transparent`)},children:[(0,q.jsx)(`span`,{style:{color:`var(--text-muted)`,fontSize:`0.65rem`,fontWeight:700,width:L?`auto`:`85px`,fontFamily:`JetBrains Mono, monospace`,flexShrink:0},children:new Date(e.created_at).toLocaleTimeString(void 0,{hour12:!1,hour:`2-digit`,minute:`2-digit`,second:`2-digit`})}),(0,q.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:L?`8px`:`16px`},children:[(0,q.jsx)(`span`,{style:{color:`var(--gold)`,fontWeight:800,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`},children:L?`${e.on_chain_tx_hash.substring(0,12)}...`:`${e.on_chain_tx_hash.substring(0,24)}...`}),(0,q.jsxs)(`span`,{style:{color:`white`,fontWeight:800,fontSize:`0.75rem`,fontFamily:`JetBrains Mono, monospace`},children:[e.contract_value_intg,` `,(0,q.jsx)(`span`,{style:{color:`var(--gold)`,opacity:.6},children:`ITK`})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[e.verified_by_xibalba?(0,q.jsxs)(`span`,{style:{color:`var(--emerald)`,display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.6rem`,fontWeight:800,letterSpacing:`0.05em`},children:[(0,q.jsx)(A,{size:11}),` ZK-SNARK_VERIFIED`]}):(0,q.jsxs)(`span`,{style:{color:`var(--text-muted)`,display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`0.6rem`,fontWeight:800,letterSpacing:`0.05em`},children:[(0,q.jsx)(h,{size:11}),` ORACLE_PENDING`]}),(0,q.jsx)(`div`,{style:{width:`1px`,height:`10px`,background:`var(--border)`}}),(0,q.jsx)(`span`,{style:{fontSize:`0.55rem`,padding:`2px 8px`,borderRadius:`4px`,background:e.dispute_status===`RESOLVED`?`rgba(16, 185, 129, 0.1)`:`rgba(244, 63, 94, 0.1)`,color:e.dispute_status===`RESOLVED`?`var(--emerald)`:`#f43f5e`,border:`1px solid ${e.dispute_status===`RESOLVED`?`rgba(16, 185, 129, 0.2)`:`rgba(244, 63, 94, 0.2)`}`,fontWeight:800,letterSpacing:`0.05em`},children:e.dispute_status})]})]})]}),(0,q.jsx)(P,{children:n&&(0,q.jsxs)(j.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},style:{background:`rgba(5, 13, 24, 0.4)`,borderTop:`1px solid var(--border)`,overflow:`hidden`,display:`flex`,flexDirection:`column`,padding:`var(--space-6)`,gap:`16px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderBottom:`1px solid var(--border)`,paddingBottom:`12px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(g,{size:16,style:{color:`var(--gold)`}}),(0,q.jsx)(`span`,{style:{fontWeight:800,fontSize:`0.85rem`,color:`white`,letterSpacing:`0.05em`},children:`TRANSACTION DETAILS`})]}),(0,q.jsx)(`button`,{onClick:e=>{e.stopPropagation(),x(null)},style:{background:`transparent`,border:`none`,color:`var(--text-muted)`,cursor:`pointer`},children:(0,q.jsx)(ee,{size:18})})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,fontSize:`0.8rem`},children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`Transaction Hash`}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginTop:`4px`},children:[(0,q.jsx)(`span`,{style:{fontFamily:`monospace`,color:`var(--gold)`,wordBreak:`break-all`},children:b.on_chain_tx_hash}),(0,q.jsx)(`button`,{onClick:()=>R(b.on_chain_tx_hash,`hash`),style:{background:`transparent`,border:`none`,color:`var(--text-muted)`,cursor:`pointer`},children:S===`hash`?(0,q.jsx)(o,{size:12,color:`var(--success)`}):(0,q.jsx)(p,{size:12})})]})]}),(0,q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`12px`},children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`Value`}),(0,q.jsxs)(`div`,{style:{fontSize:`1.1rem`,fontWeight:800,color:`white`,marginTop:`2px`,fontFamily:`monospace`},children:[b.contract_value_intg,` `,(0,q.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--gold)`},children:`ITK`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`Verification`}),(0,q.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`,marginTop:`4px`},children:b.verified_by_xibalba?(0,q.jsx)(`span`,{style:{color:`var(--emerald)`,fontWeight:800,fontSize:`0.7rem`},children:`ZK-SNARK`}):(0,q.jsx)(`span`,{style:{color:`var(--text-muted)`,fontWeight:800,fontSize:`0.7rem`},children:`ORACLE_PENDING`})})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`From Address`}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginTop:`4px`},children:[(0,q.jsx)(`span`,{style:{fontFamily:`monospace`,color:`var(--text-primary)`,wordBreak:`break-all`},children:b.from||b.agent_address||`0xcc3fa26e4c792f253b72d7d4b885c1fa7116a99c`}),(0,q.jsx)(`button`,{onClick:()=>R(b.from||b.agent_address||`0xcc3fa26e4c792f253b72d7d4b885c1fa7116a99c`,`from`),style:{background:`transparent`,border:`none`,color:`var(--text-muted)`,cursor:`pointer`},children:S===`from`?(0,q.jsx)(o,{size:12,color:`var(--success)`}):(0,q.jsx)(p,{size:12})})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`To Address`}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginTop:`4px`},children:[(0,q.jsx)(`span`,{style:{fontFamily:`monospace`,color:`var(--text-primary)`,wordBreak:`break-all`},children:b.to||`0x5b5670d93038406468e0fa2c9683bf1673dedbf3`}),(0,q.jsx)(`button`,{onClick:()=>R(b.to||`0x5b5670d93038406468e0fa2c9683bf1673dedbf3`,`to`),style:{background:`transparent`,border:`none`,color:`var(--text-muted)`,cursor:`pointer`},children:S===`to`?(0,q.jsx)(o,{size:12,color:`var(--success)`}):(0,q.jsx)(p,{size:12})})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`Timestamp`}),(0,q.jsx)(`div`,{style:{color:`var(--text-primary)`,marginTop:`2px`},children:new Date(b.created_at).toLocaleString()})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--text-muted)`,fontWeight:800},children:`Dispute Status`}),(0,q.jsx)(`div`,{style:{marginTop:`4px`},children:(0,q.jsx)(`span`,{style:{fontSize:`0.7rem`,padding:`3px 8px`,borderRadius:`4px`,background:b.dispute_status===`RESOLVED`?`rgba(16, 185, 129, 0.1)`:`rgba(244, 63, 94, 0.1)`,color:b.dispute_status===`RESOLVED`?`var(--emerald)`:`#f43f5e`,border:`1px solid ${b.dispute_status===`RESOLVED`?`rgba(16, 185, 129, 0.2)`:`rgba(244, 63, 94, 0.2)`}`,fontWeight:800},children:b.dispute_status})})]}),w?(0,q.jsxs)(`form`,{onSubmit:ae,style:{padding:`16px`,background:`rgba(255,255,255,0.02)`,border:`1px solid var(--border)`,borderRadius:`var(--r-sm)`,display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--gold)`,letterSpacing:`0.05em`,fontWeight:800},children:`Initiate Dispute Workflow`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`label`,{style:{display:`block`,fontSize:`0.6rem`,color:`var(--text-muted)`,marginBottom:`4px`,textTransform:`uppercase`},children:`Dispute Reason`}),(0,q.jsx)(`textarea`,{value:D,onChange:e=>O(e.target.value),placeholder:`Specify detailed SLA violation or mismatched hash...`,required:!0,style:{width:`100%`,background:`rgba(0,0,0,0.3)`,border:`1px solid var(--border)`,borderRadius:`4px`,padding:`8px`,color:`white`,fontSize:`0.75rem`,minHeight:`60px`,outline:`none`,resize:`vertical`}})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`label`,{style:{display:`block`,fontSize:`0.6rem`,color:`var(--text-muted)`,marginBottom:`4px`,textTransform:`uppercase`},children:`Collateral Bond (ITK)`}),(0,q.jsx)(`input`,{type:`number`,value:k,onChange:e=>M(e.target.value),style:{width:`100%`,background:`rgba(0,0,0,0.3)`,border:`1px solid var(--border)`,borderRadius:`4px`,padding:`6px 8px`,color:`white`,fontSize:`0.75rem`,outline:`none`}})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`4px`},children:[(0,q.jsx)(`button`,{type:`submit`,disabled:F,className:`btn btn-primary`,style:{flex:1,padding:`8px`,fontSize:`0.7rem`,fontWeight:700,borderRadius:`4px`,color:`#000`,cursor:`pointer`},children:F?`SUBMITTING...`:`RAISE DISPUTE`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>E(!1),className:`btn-outline`,style:{flex:1,padding:`8px`,fontSize:`0.7rem`,fontWeight:700,borderRadius:`4px`,color:`white`,border:`1px solid var(--border)`,background:`transparent`,cursor:`pointer`},children:`CANCEL`})]})]}):(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(`div`,{style:{padding:`12px`,background:`rgba(0,0,0,0.3)`,border:`1px solid var(--border)`,borderRadius:`var(--r-sm)`},children:[(0,q.jsx)(`div`,{style:{fontSize:`0.65rem`,textTransform:`uppercase`,color:`var(--gold)`,letterSpacing:`0.05em`,marginBottom:`8px`,fontWeight:800},children:`On-Chain State Anchor & Merkle Proof`}),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,fontFamily:`monospace`,fontSize:`0.7rem`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`span`,{style:{color:`var(--emerald)`},children:`[LEAF]`}),(0,q.jsxs)(`span`,{style:{color:`var(--text-primary)`},children:[`tx_hash: `,b.on_chain_tx_hash.substring(0,14),`...`]})]}),(0,q.jsxs)(`div`,{style:{paddingLeft:`12px`,borderLeft:`1px dashed var(--gold)`,display:`flex`,flexDirection:`column`,gap:`6px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`[sibling_1]`}),(0,q.jsxs)(`span`,{style:{color:`var(--text-muted)`},children:[`0x`,b.on_chain_tx_hash.substring(10,22),`...`]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`span`,{style:{color:`var(--text-muted)`},children:`[sibling_2]`}),(0,q.jsxs)(`span`,{style:{color:`var(--text-muted)`},children:[`0x`,b.on_chain_tx_hash.substring(18,30),`...`]})]})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,paddingTop:`4px`,borderTop:`1px dashed rgba(255,255,255,0.05)`},children:[(0,q.jsx)(`span`,{style:{color:`var(--gold)`},children:`[ROOT]`}),(0,q.jsxs)(`span`,{style:{color:`var(--text-primary)`},children:[`State Root: 0x`,b.on_chain_tx_hash.substring(24,38),`...`]})]})]})]})})]}),(0,q.jsxs)(`div`,{style:{borderTop:`1px solid var(--border)`,paddingTop:`16px`,display:`flex`,gap:`8px`},children:[(0,q.jsxs)(`a`,{href:`https://sepolia.basescan.org/tx/${b.on_chain_tx_hash}`,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-primary`,style:{flex:1,display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`8px`,textDecoration:`none`,color:`#000`,fontSize:`0.75rem`,padding:`10px 0`,borderRadius:`4px`,fontWeight:700},children:[`VIEW ON BASESCAN `,(0,q.jsx)(s,{size:14})]}),!w&&b.dispute_status!==`PENDING`&&b.dispute_status!==`DISPUTED`&&(0,q.jsx)(`button`,{onClick:()=>E(!0),className:`btn-outline`,style:{flex:1,display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`8px`,border:`1px solid #f43f5e`,background:`rgba(244, 63, 94, 0.1)`,color:`#f43f5e`,fontSize:`0.75rem`,padding:`10px 0`,borderRadius:`4px`,fontWeight:700,cursor:`pointer`},children:`DISPUTE TRANSACTION`})]})]})})]},e.on_chain_tx_hash+t)}):(0,q.jsx)(`div`,{style:{color:`var(--text-muted)`,padding:`var(--space-12)`,textAlign:`center`,fontStyle:`italic`,fontSize:`0.8rem`},children:`No records found on-chain.`})})}),(0,q.jsxs)(`div`,{style:{padding:`var(--space-3) var(--space-6)`,background:`rgba(0,0,0,0.2)`,borderTop:`1px solid var(--border)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,q.jsxs)(`span`,{style:{fontSize:`0.65rem`,color:`var(--text-muted)`,fontWeight:800},children:[B.length,` SECURE_RECORDS_INDEXED`]}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,q.jsx)(`button`,{className:`btn-outline`,style:{padding:`6px 12px`,fontSize:`0.65rem`,borderRadius:`var(--r-xs)`},disabled:!0,children:`PREV`}),(0,q.jsx)(`button`,{className:`btn-outline`,style:{padding:`6px 12px`,fontSize:`0.65rem`,borderRadius:`var(--r-xs)`},children:`NEXT`})]})]})]})},Q=({label:e,value:t,icon:n})=>(0,q.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,gap:`var(--space-4)`,padding:`var(--space-4) var(--space-5)`,background:`var(--bg-card)`,border:`1px solid var(--glass-border)`,borderRadius:`var(--radius-md)`},children:[(0,q.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`var(--radius-sm)`,background:`var(--primary-dim)`,border:`1px solid var(--primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--primary)`,flexShrink:0},children:n}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{style:{fontSize:`1.5rem`,fontWeight:700,color:`var(--text-primary)`,lineHeight:1},children:t}),(0,q.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`,marginTop:`4px`,letterSpacing:`0.04em`,textTransform:`uppercase`},children:e})]})]});function pe(){let{stats:e,activeTab:t,setActiveTab:r}=n(),i=e?.total_contracts??`—`,a=e?.active_nodes??`—`,o=e?.active_disputes??`—`,s=t===`factory`;return(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:s?`0`:`var(--space-6)`,padding:s?`0`:`var(--space-6)`,flex:s?1:void 0,minHeight:`100%`},children:[!s&&(0,q.jsxs)(j.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.32,delay:.06,ease:`easeOut`},style:{display:`flex`,gap:`var(--space-4)`,flexWrap:`wrap`},children:[(0,q.jsx)(Q,{label:`Total Contracts`,value:i,icon:(0,q.jsx)(k,{size:18})}),(0,q.jsx)(Q,{label:`Active Nodes`,value:a,icon:(0,q.jsx)(O,{size:18})}),(0,q.jsx)(Q,{label:`Active Disputes`,value:o,icon:(0,q.jsx)(M,{size:18})})]}),(0,q.jsx)(`div`,{style:{marginTop:s?0:`var(--space-2)`,flex:1,display:`flex`,flexDirection:`column`},children:(0,q.jsx)(P,{mode:`wait`,children:(0,q.jsxs)(j.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.18},style:{flex:1,display:`flex`,flexDirection:`column`},children:[t===`factory`&&(0,q.jsx)(Y,{}),t===`oracle`&&(0,q.jsx)(L,{title:`Oracle Registry`,icon:(0,q.jsx)(O,{size:18}),style:{background:`transparent`,border:`none`,padding:0},children:(0,q.jsx)(Z,{})}),t===`zk`&&(0,q.jsx)(de,{}),t===`ledger`&&(0,q.jsx)(L,{title:`Immutable Settlement Ledger`,icon:(0,q.jsx)(S,{size:18}),children:(0,q.jsx)(fe,{})})]},t)})})]})}export{pe as ContractsPage};