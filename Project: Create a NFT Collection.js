// Step 1: Create a variable to hold your NFTs
let nfts = []; // Array to store NFT objects

// Step 2: Function to mint NFTs
function mintNFT(name, creator, price) {
    // Create an object to hold the metadata for the NFT
    const nft = {
        name: name,
        creator: creator,
        price: price
    };

    // Store the NFT object in the NFTs array
    nfts.push(nft);
}

// Step 3: Function to list NFTs
function listNFTs() {
    // Loop through the array of NFTs and print their metadata
    console.log("NFT Collection:");
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Creator: " + nfts[i].creator);
        console.log("Price: " + nfts[i].price + " ETH");
        console.log("---------------------------");
    }
}

// Step 4: Function to get total supply of NFTs
function getTotalSupply() {
    return nfts.length; // Return the number of NFTs created
}

// Call your functions below this line
// Mint at least three NFTs
mintNFT("Crypto Art #1", "Artist A", 1.5);
mintNFT("Crypto Art #2", "Artist B", 2.0);
mintNFT("Crypto Art #3", "Artist C", 3.0);

// Print the details of the NFTs
listNFTs();

// Print the total supply of NFTs to the console
console.log("Total Supply of NFTs: " + getTotalSupply());

