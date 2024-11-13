class TextAES {
  static stringToBytes(str) {
    const bytes = new Array(16).fill(0)
    for (let i = 0; i < str.length && i < 16; i++) {
      bytes[i] = str.charCodeAt(i)
    }
    return bytes
  }

  static bytesToString(bytes) {
    return bytes
      .map((byte) => String.fromCharCode(byte))
      .join("")
      .replace(/\0+$/, "")
  }

  static bytesToHex(bytes) {
    return bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("")
  }

  static hexToBytes(hex) {
    const bytes = []
    for (let i = 0; i < hex.length; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16))
    }
    return bytes
  }

  static encrypt(text, password) {
    const key = TextAES.stringToBytes(password)
    const input = TextAES.stringToBytes(text)

    const aes = new AES(key)
    const encrypted = aes.encrypt(input)

    return TextAES.bytesToHex(encrypted)
  }

  static decrypt(encryptedHex, password) {
    const key = TextAES.stringToBytes(password)
    const encrypted = TextAES.hexToBytes(encryptedHex)

    const aes = new AES(key)
    const decrypted = aes.decrypt(encrypted)

    return TextAES.bytesToString(decrypted)
  }
}
