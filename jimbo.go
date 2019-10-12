package main

import ("fmt";"io/ioutil";"net/http")

func main() {
     res, err := http.Get("http://api.reimaginebanking.com/atms?key=your_key")
     errCheck(err)
     defer res.Body.Close()
     body, err := ioutil.ReadAll(res.Body)
     errCheck(err)
     fmt.Printf("%s\n", string(body))
}

func errCheck(e error) {
     if e != nil {
         panic(e)
     }
}

