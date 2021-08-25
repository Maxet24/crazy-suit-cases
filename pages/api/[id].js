import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import traits from "../../database/traitsfinal.json";

const bananaApi = async(req, res) => {
  
// THE ID YOU ASKED IN THE URL
  const query = req.query.id;

  const totalBananas = 10000;
  if(parseInt(query) < totalBananas) {

    let tokenName= `#${query}`

    const trait = traits[parseInt(query)]
    // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby 
    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards

    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    metadata = {
      "name": tokenName,
      "description": "During COVID-19, people almost stopped traveling. Because of this, their suitcases stopped fulfilling their function. They have been lying around and gathering dust in people's homes for a long time. This affected the suitcases so much that they began to go crazy. The CrazySuitcases ran away from their homes. Our team rescued the crazy suitcases. But they need new homes. Only you can help them and shelter them!",
      "tokenId" : parseInt(query),
      "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
      "external_url":"https://crazysuitcases.club/",
      "attributes": [          
          {
            "trait_type": "Background",
            "value": trait["Background"]
          },
          {
            "trait_type": "Case Color",
            "value": trait["Case Color"]
          },
          {
            "trait_type": "Face",
            "value": trait["Face"]
          },
          {
            "trait_type": "Hat",
            "value": trait["Hat"]
          },
          {
            "trait_type": "Pants Color",
            "value": trait["Pants Color"]
          },
          {
            "trait_type": "Pants Pattern",
            "value": trait["Pants Pattern"]
          },
          {
            "trait_type": "Hands",
            "value": trait["Hands"]
          },
  
      ]
    }
    
    console.log(metadata)

    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The banana you requested is out of range"})

  }


  // this is after the reveal

  
}

export default bananaApi