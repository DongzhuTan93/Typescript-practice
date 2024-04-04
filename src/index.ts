class KeyValuePair<K, V> {
    constructor(public key: K , public value: V) {}  // Generic classes
}

let pair = new KeyValuePair('1', 'a')
pair.key.length // They are all string properties after key. 