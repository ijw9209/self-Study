# 프로세스의 생성과 종료

## 프로세스 생성

+ 프로세스는 프로세스에 의해 만들어진다.(부모,자식,프로세스트리)
+ OS가 제일 첫번째 프로세스를 만듬(ex. init > 이 자식들을 만듬)
+ Process Identifier (PID) : 프로세스 고유 번호(유니크함) 
    - PPID(부모번호)
+ 프로세스 생성
    - fork() system call – 부모 프로세스 복사
    - exec() – 실행파일을 메모리로 가져오기


## 프로세스 종료
    - exit() system call    
    - 해당 프로세스가 가졌던 모든 자원(메모리 , 파일등..) 모두 회수후 OS로


# 쓰레드

+ 프로그램 내부의 흐름, 맥

![image](data:image/png;base64,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)

+ 다중쓰레드(Multithreads)
    - 한 프로그램에 2개 이상의 맥
    - **맥이 빠른시간간격으로 스위칭된다.** => 여러맥이 동시실행되는것처럼 보임
    - 예) Web browser (화면 출력 쓰레드 + 데이터 읽어오는 쓰레드)
    - 예) Word processor (화면 출력 쓰레드 + 키보드 입력받는 쓰레드 + 철자/문법 오류확인쓰레드)

+ Context Switch되는 단위가 쓰레드단위다.

+ 쓰레드 구조
    - 프로세스의 메모리 공간 공유(code, data)
    - 프로세스의 자원 공유(file, i/o)
    - 비공유: 개별적인 PC,SP,registers , **stack**
    - 하나의 프로그램은 code,data, stack 3가지로 구성

+ 자바쓰레드
    - 모든 프로그램은 처음부터 1개의 쓰레드는 갖고 있다 (main)   
    - 주요 메소드(java.lang.Thread)
        * public void run() // 새로운 맥이 흐르는 곳 (치환)
        * void start() // 쓰레드 시작 요청
        * void join() // 쓰레드가 마치기를 기다림
        * static void sleep() // 쓰레드 멈추기

+ 프로세스 동기화
    - Independent Process : 독립적인 프로세스.다른 프로세스에 영향을 미치지않음
    - Cooperating Process : 협력적인 프로세스.다른 프로세스에 대해서 영향을 미치거나 받음
    - 프로세스간 통신 : 전자우편 , 파일전송
    - 프로세스간 자원 공유: 메모리 상의 자료들, 데이터베이스 등
    - 서로간의 영향을 주고받는 프로세스들간에 순서를 잘지어서 데이터의 일관성 유지
    - EX)은행계좌문제 
        * 부모님은 은행계좌에 입금; 자녀는 출금
        * 입금(deposit)과 출금(withdraw) 은 독립적으로 일어난다.
        * 입 출금 동작에서 공통변수에대해 동시에 업데이트하면 문제가생김 **(임계구역문제)**

+ 임계구역 문제
    - 다중쓰레드의 시스템에서 일어난다.
    - 공통적으로 사용(DB , File등)하는 업데이트하는구간 => Critical section
    - 해결책
        * Mutual exclusion (상호베타) : 공통변수에 한 쓰레드만 진입
        * Progress (진행) : 진입 결정은 유한시간내
        * Bounded waiting (유한대기): 어느 쓰레드라도 유한 시간 내

+ 프로세스/쓰레드 동기화
    - 임계구역 문제 해결(틀린 결과가 나오지 않도록)
    - 프로세스 실행순서 제어(원하는대로)


+ O/S가 하는일중 Process Management (cpu 스케쥴링 , 동기화)가 중요하다.


## 동기화 도구

+ 세마포(Semaphores)
    - 동기화 문제해결을위한 소프트웨어 툴
    - 내부구조 : 정수형 변수 + 두개의 동작(P, V)
    - 동작 : P: Proberen (test) → **acquire()** , V: Verhogen (increment) → **release()**
    - Ready Que > cpu > IO QUEUE> Ready Que > cpu >terminate
    - 세마포도 IO처럼 큐를 가지고 있으며, 조건을 만족하면 세마포 큐에 넣어줘서 해당 쓰레드가 못하게 블락한다.
    
```java
    void acquire() {
    value--;
    if (value < 0) {
    add this process/thread to list;
    block;
        }
    }
    void release() {
    value++;
    if (value <= 0) {
    remove a process P from list;
    wakeup P;
        }
    }
```
- 일반적사용 
    * Mutual exclusion : acquire(),release()를 이용하여 공통된 자원에서 하나의 쓰레드만 작동하게 한다.