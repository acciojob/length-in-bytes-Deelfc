function byteSize(str) {
    // Create a Blob object with the given string
    const blob = new Blob([str]);
    // Get the size of the Blob object in bytes
    const sizeInBytes = blob.size;
    return sizeInBytes;
}

// Example usage:
console.log(byteSize('hello world')); // Should print 11
console.log(byteSize('안녕하세요')); // Should print 15
console.log(byteSize('')); // Should print 0

