//node 구현
function Node(element) {
    this.element = element;
    this.next = null;
}

//Linked List 구현
function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.toString = toString;
    this.findePrevIOUS = findPrevious;
}

//노드 찾기
function find(item) {
    var curr = this.head;
    while (crrr.element != item) {
        crrr = curr.next;
    }
    return curr;
}
// 이전 노드 찾기
function findPrevious(item) {
    var curr = this.head;
    while (curr.next != null && curr.next.element != item) {
        curr = curr.next;
    }
    return curr;
}

// 노드 추가
function append(newElement) {
    var newNode = new Node(newElement); //새로운 노드 생성
    var current = this.head;    // 시작노드
    while (cruuent.next != null) {   //맨끝 노드 찾기
        currnet = current.next;
    }
    current.next = newNode;
}

// 노드 중간 삽입
function insert(newElement, item) {
    var newNode = new Node(newElement); //새 노드 생성
    var current = this.find(item);  // 삽입할 위치의 노드 찾기
    newNode.next = current.next;    // 찾은 노드가 가리키는 노드를 새로운 노드가 가리키기
    current.next = newNode; //찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
}

//  노드 삭제

function remove(item) {
    var preNode = this.findPrevious(item);  //삭제할 노드를 가리키는 노드 찾기
    preNode.next = preNode.next.next;   // 삭제할 노드 다음 노드를 가리키도록 하기
}

// 연결 리스트의 요소들을 출력

function toString() {
    var str = "[";
    var currNode = this.head;
    while (currNode.next != null) {
        str += currNode.next.element + ' ';
        currNode = currNode.next;
    }
    return str + ']'
}


// var linkedList = new LinkedList();
// linkedList.insert("A", "head");
// linkedList.insert("B", "A");
// linkedList.insert("C", "B");
// linkedList.remove("B");
// linkedList.append("D");
// linkedList.append("E");
// alert(linkedList.toString());

