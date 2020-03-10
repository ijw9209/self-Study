//ES6 List 만들기
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []
    }
    //get 키워드 활용 -> 사용은 .length로 변수처럼 사용
    get length() {
        return this.listSize;
    }
    //요소 삽입
    append(element) {
        this.dataStore[this.listSize] = element;
        this.listSize++;
    }
    //요소 검색후 인덱스 리턴
    find(element) {
        for (let i = 0; i < this.listSize; i++) {
            if (element === this.dataStore[i]) {
                return i;
            }
        }
        return -1;
    }
    //요소 제거
    remove(element) {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);     //해당 배열요소 삭제
            --this.listSize; // 크기 1개 축소 
            return true;
        }
        return false;
    }
    //리스트 요소 출력
    toStirng() {
        return this.dataStore;
    }
    // 특정 위치 다음에 요소 삽입
    insert(element, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;

    }
    //리스트 전체 삭제
    clear() {
        this.dataStore = [];    //delete 즉시 배열을 삭제하고 빈배열 재생성
        this.listSize = this.pos = 0;
    }
    //리스트에 특정값이 있는지 판단
    contains(element) {
        for (let i = 0; i < this.listSize; i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }
    next() {
        if (this.post < this.listSize - 1) {
            this.pos++;
        }
    }
    currPost() {
        return this.pos;
    }
    moveTo(position) {
        this.pos = position;
    }
    getElement() {
        return this.dataStore[this.pos];
    }
}
window.onload = () => {
    const list = new List();
    list.append(1);
    list.append(2);
    list.append(3);
    console.log(list.length);       //3 
    console.log(list.find(3));      //2 (index) 
    list.remove(2);
    console.log(list.length);       // 2
    console.log(list.toStirng());   // [1 , 3]
    list.clear();
    console.log(list.length);       // 0 
    list.append(1);
    console.log(list.toStirng());   // [1]
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    console.log(list.toString())    // [1,2,3,4,5]
    list.front();
    console.log(list.getElement());  //1
    list.next();
    console.log(list.getElement()); // 2
    list.next();
    list.next();
    list.prev();
    console.log(list.getElement()); // 3
}