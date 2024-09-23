package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
    url := "http://127.0.0.1:3306/species"

    // Данные запроса
    data := map[string]interface{}{
        "scientificName":  "Mustela erminea",
        "CommonName":      "Горностай",
        "Class":        	 "Млекопитающие",
				"Group":					 "хищные",
        "Status":          "Уязвимый",
				"Family": 				 "куньи",
				"Kind": 					 "ласки и хорьки",
        "Description":     `Этот зверёк длиной всего 18-26 сантиметров. Маленький размер позволяет ему легко находить себе местообитание даже в городской среде. Летом мех бурый, зимой – чисто белый. Кончик хвоста всегда чёрный.

				Несмотря на свой небольшой размер, горностай – настоящий хищник. По ночам он  охотится на мышевидных  грызунов и землероек, реже ест птиц, лягушек, насекомых и ягоды. При случае может подбирать остатки добычи более крупных хищников.

				В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов

				Горностай на городских природных территориях – это редкий вид, включённый в Красную Книгу г. Москвы. `,
        "Habitat":         "Savannahs and forests",
				"Population":				9,
				"Coordinates": [][][2]float64{{{55.760438, 37.436393}, {55.760457, 37.435314}, {55.760267, 37.434449}, {55.760868, 37.432774}}},
				"ResidenceTime": "Птица находится в зимовке в период с октября по март",
    }
    
    // Преобразуем данные в JSON
    jsonData2, err2 := json.Marshal(data)
    if err2 != nil {
        fmt.Println("Error marshalling data:", err2)
        return
    }

    resp2, err2 := http.Post(url, "application/json", bytes.NewBuffer(jsonData2))
    if err2 != nil {
        fmt.Println("Error making request:", err2)
        return
    }
    defer resp2.Body.Close()

    body := new(bytes.Buffer)
    body.ReadFrom(resp2.Body)
    fmt.Println("Response:", body.String())
}
