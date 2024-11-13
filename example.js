const message = "Hello World!"
const password = "holy cow"

// Encrypt
const encrypted = TextAES.encrypt(message, password)
console.log("Encrypted:", encrypted)

// Decrypt
const decrypted = TextAES.decrypt(encrypted, password)
console.log("Original:", message)
console.log("Decrypted:", decrypted)
