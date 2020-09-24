// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        // let current = this.head;
        if(this.tail === null) {
            let node = new Node(val);
            this.tail = node;
            this.head = node;
            this.length++;
        } else {
            let current = this.head;
            let value = new Node(val);

            while(current.next) {
                current = current.next;
            }
            current.next = value;
            this.tail = value;
            this.length++;
        }
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0) return undefined;

        if(this.length === 1) {
            let old = this.tail;
            this.tail = null
            this.head = null
            this.length--
            return old
        } else {
            let old = this.tail;

            let curr = this.head
            while(curr.next !== this.tail) {
                curr = curr.next // this.head.next
            }
            this.tail = curr
            this.tail.next = null
            this.length--
            return old
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        this.head = node;
        this.head.next = node;
        let next = this.head
        node.next = next
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
