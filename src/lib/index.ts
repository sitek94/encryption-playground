// Generate a private-public key pair for RSA-OAEP
export async function generateKeyPair(): Promise<CryptoKeyPair> {
	return await crypto.subtle.generateKey(
		{
			name: 'RSA-OAEP',
			modulusLength: 2048,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: 'SHA-256'
		},
		true,
		['encrypt', 'decrypt']
	);
}

// Encrypt a message using a public key
export async function encryptMessage(publicKey: CryptoKey, message: string): Promise<ArrayBuffer> {
	const encodedMessage = new TextEncoder().encode(message);
	return await crypto.subtle.encrypt(
		{
			name: 'RSA-OAEP'
		},
		publicKey,
		encodedMessage
	);
}

// Decrypt a message using a private key
export async function decryptMessage(
	privateKey: CryptoKey,
	encryptedMessage: ArrayBuffer
): Promise<string> {
	const decryptedBuffer = await crypto.subtle.decrypt(
		{
			name: 'RSA-OAEP'
		},
		privateKey,
		encryptedMessage
	);
	return new TextDecoder().decode(decryptedBuffer);
}
