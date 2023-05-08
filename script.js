function CharCounter (Input_str) {
    let counter = [...Input_str].reduce((CurrChar, PrevChar) => {
        if (!CurrChar[PrevChar]) {
            CurrChar[PrevChar] = 1
            }
            else {
                CurrChar[PrevChar] = CurrChar[PrevChar] + 1;
            }
            // delete CurrChar[" "]
            }, {});
        return counter;
    }
console.log(CharCounter("Hello world"))
