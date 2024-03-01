/**
 NOTE: JavaScript ek single threaded application hai.
 
 code file --> global execution context --> refer  to this keyword

 JS ki jo code file hai  toh sabse pehale jo chiz banti hai isme 
toh hamesha hi hamesha sabse pehale global execution context or jaha bhi global execution context
banega toh wo usko refer kar diya jaata hai this variable me or ye sab single
thread par execution hoga.

NOTE: in browser this ki value window object aati hai.


  JavaScript Execution Context: 
     1. Global Execution context
     2. funtion Execution context
     3. Eval Execution Context

     {js code } --> it will run into 2 phases.
                    1. memory creation phase: memory creation phase me sirf aapke variables ya jo bhi humne declare kiya hai
                                            unk liye jagah allocate hoti hai unko execute nhi kiya jaata hai.
                    jo bhi mathematical function likhe hai to ye sab isme nahi hota hai.Memory allocation Phase hota hai is creation phase me.
                   
                    2. Execution phase:
                   
                    Example:  let val1 = 10
                              let val2 = 5
                              function addNum(num1, num2){
                                let total = num1 + num2
                                return total
                              }
                              let result1 = addNum(val1, val2)
                              let result2 = addNum(10,2)

                    coding steps:
                    1. global execution/global env. jo bhi code run karna ho wo sabse pehale 
                     global execution se run hota hai or isko sabse pehale allocate kiya jaata hai 
                     this k andar.

                    2. memory phase k andar saare variable ko ikadha kiya jaata hai 
                    or un sabko bas rakha jaata hai apne paas mein 
                    
                    sabse pehale yahi hota hai memory creation phase me  
                    
                    val1 -> undefined
                    val2 -> undefined
                    addition -> defination
                    result 1 -> undefined
                    result 2 -> undefined

                    3. execution phase me :
                       val1 -> 10
                       val2 -> 5
                       
                                  ab jab ye addNum par aayega to ye apna ek alg execution context banayega
                                  jitani baar bhi ye function execute hote hai
                                  utani baar apne liye ek new executional context  banega jo addNum me ban raha hai.

                       addNum ->  new variable + execution thread
                                  
                                  ab yaha new sendbox ready hua hai to ab 2 chize phir se run hongi 
                                   1. memory phase 2. execution phase ye dono addNum function k liye phir se execute hoga
                                   kuki global toh ek hi baar define hota hai  par ab jitani baar bhi apne paas function aayega utani baar 
                                  ye 2 chize banegi 
                      NOTE: Ye jo upar new executional context bana kaam hone k baad ye delete bhi ho jaata hai. 
                      
                        execution complete hone k baad return hua
                        result1 = 15
                        result 2 => yaha phir se ab  new variable + execution thread
                                      phir se upar waali process repeate hogi memory phase 
                                      or execution phase waali new sendbox create hone k baad
                      
                      ye result 2 k 1. memory phase: and 2. execution phase: hai
                      
                      1. memory phase:val1 -> undefined
                                      val2 -> undefined
                                      total -> undefined

                      2. execution phase: 
                      
                      ye addNum k   1. memory phase: and 2. execution phase: hai
                      1. memory phase: val1 -> undefined
                                      val2 -> undefined
                                      total -> undefined
                   
                      2. execution phase: num1 -> 10
                                          num2 -> 5
                                          total -> 15 ab ye jo total hai wo return hoga upar global executional context me




 
                       */ 