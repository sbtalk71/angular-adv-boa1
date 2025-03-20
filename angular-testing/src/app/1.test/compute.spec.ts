import { compute } from "./calculator";

xdescribe("compute test suit",()=>{
    beforeAll(()=>{
        console.log("Before all executed..")
    })
    afterAll(()=>{ 
        console.log("After all executed..")})

    it("should return 0 if x is -1",()=>{
        let result=compute(-1);
        expect(result).toBe(0);
    })

    it("should return 2 if x is 1",()=>{
        let result=compute(1);
        expect(result).toBe(2);
    })
    }
);