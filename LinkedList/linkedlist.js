require('../line.js');

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }

    // Insert element at head
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data) {
        var node = new Node(data);

        var current;

        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // Insert at any index
    insertAt(data, index) {
        // index out of range
        if(index < 0 || index > this.size) {
            return;
        }

        // if index = 0
        if(index == 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        } 

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count<index) {
            previous = current; // Node before the index
            count++;
            current = current.next; // Node after the index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // get at index
    getAt(index) {
        let current = this.head;

        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
                return;
            }
            count++;
            current = current.next; 
        }

        return null;
    }

    // remove from index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                previous = current;
                count++;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }

    // removeFirst
    removeFirst() {
        let current = this.head;
        this.head = this.head.next;
        this.size--;
        return current.data;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
        console.log("List is empty");
    }

    // Print list
    printListData() {
        var current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertLast(500);

ll.insertAt(150, -1);

console.log("Size of list: ", ll.size);


//ll.removeAt(2);
console.log("Remove first element :", ll.removeFirst());

//ll.clearList();

ll.printListData(); 

//ll.getAt(2);
