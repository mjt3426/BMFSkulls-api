import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/traitsfinal.json";

const infuraAddress = INFURA_ADDRESS

const bananaApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const skullContract = new web3infura.eth.Contract(ABI, ADDRESS)
  


  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
//   const totalSupply = await bananaContract.methods.totalSupply().call();
//   console.log(totalSupply)
  


// THE ID YOU ASKED IN THE URL
  const query = req.query.id;


  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
//   if(parseInt(query) < totalSupply) {
  const totalskulls = 2000;
  if(parseInt(query) < totalskulls) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await skullsContract.methods.Names(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`

    
    
    const signatures = [137,883,1327,1781,2528,2763,3833,5568,5858,6585,6812,7154,8412]
    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby 

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    function validateDate() {
    pickedDate = Date.parse("016-Aug-2021".replace(/-/g, " "));
    todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    dateDifference = Math.abs(Number(todaysDate) - pickedDate);
    //7 Days=604800000ms
    if (dateDifference > 86400000) {
        metadata = {
            "name": "Sorry, Not yet. Do you have the strength to hold?"
            "description": "Patience. All will be revealed tomorrow.",
            "tokenId" : parseInt(query),
            "image": 'https://gateway.pinata.cloud/ipfs/QmbEs3ww4ijPGGvr5kLMCtyhc56x9j1wZVXmQzM3Q74tdH',
    } else {
    // GENERAL SKULL METADATA
      metadata = {
        "name": tokenName,
        "description": "BoringBananasCo is a community-centered enterprise focussed on preserving our research about the emerging reports that several banana species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's bananas depends on it.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://bmfskulls.art",
        "attributes": [          
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "Banana Base",
              "value": trait["Banana Base"]
            },
            {
              "trait_type": "Mouth",
              "value": trait["Mouth"]
            },
            {
              "trait_type": "Eyes",
              "value": trait["Eyes"]
            },
            {
              "trait_type": "Head Gear",
              "value": trait["Head Gear"]
            },
    
        ]
      }
      
      // console.log(metadata)

    }
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The skull you requested is out of range"})

  }


  // this is after the reveal

  
}

export default skullApi
