# API Documentation

## Initialization

```go
database.InitBD() // Инициализация БД
```
## Endpoints
### 1. Get All Species
GET "/species"  
Response:

#### Success Response  
Status Code: 200 OK  
Response Body:
```json
{
    "species": [
        {
              "id": 1, // PrimaryKey
              "ScientificName": "string", // Научное название
	          "CommonName":     "string", // Обычное название
	          "Class":          "string", // Категория 
	          "Group":          "string", // Группа
	          "Family":         "string", // Семеяйство
	          "Kind":           "string", // Вид
	          "Status":         "string", // Статус в красной книге
	          "Description":    "string", // Описние вида
	          "Habitat":        "string", // Ареал обитания
	          "Population":     1,        // Численость популяции
              "CreatedAt":      "time.Time", // Время создания
              "UpdatedAt":      "time.Time", // Время последнего обновления
              "DeletedAt":      "gorm.DeletedAt" // Мягкое удаление
        }
        // и другие
    ]
}
```

### 2. Get Species by ID
Получает информацию о виде по его id.  
GET "/species/:id"   

#### Parameters:  
id (integer): Идентификатор вида.  

#### Response:  
Success Response  
Status Code: 200 OK  
Response Body:
```json
        {
              "id": 1, // PrimaryKey
              "ScientificName": "string", // Научное название
	          "CommonName":     "string", // Обычное название
	          "Class":          "string", // Категория 
	          "Group":          "string", // Группа
	          "Family":         "string", // Семеяйство
	          "Kind":           "string", // Вид
	          "Status":         "string", // Статус в красной книге
	          "Description":    "string", // Описние вида
	          "Habitat":        "string", // Ареал обитания
	          "Population":     1,        // Численость популяции
              "CreatedAt":      "time.Time", // Время создания
              "UpdatedAt":      "time.Time", // Время последнего обновления
              "DeletedAt":      "gorm.DeletedAt" // Мягкое удаление
        }
```
#### Error Response  

Status Code: 404 Not Found  
Response Body:
```json
{
  "error": "Species not found"
}
```
### 3. Create Species
POST "/species"

#### Description:
Создаёт новый вид.

#### Request Body:
```json
{
    "ScientificName":   "string", // Научное название
	  "CommonName":     "string", // Обычное название
	  "Class":          "string", // Категория 
	  "Group":          "string", // Группа
	  "Family":         "string", // Семеяйство
	  "Kind":           "string", // Вид
	  "Status":         "string", // Статус в красной книге
	  "Description":    "string", // Описние вида
	  "Habitat":        "string", // Ареал обитания
	  "Population":     1        // Численость популяции
}  
```
#### Response:
Success Response  
Status Code: 201 Created
### 4. Update Species
PUT "/species/:id"

#### Description:
Обновляет информацию о виде по его id.

#### Parameters:
id (integer): Идентификатор вида.

#### Request Body:
```json
{
    "ScientificName":   "string", // Научное название
	  "CommonName":     "string", // Обычное название
	  "Class":          "string", // Категория 
	  "Group":          "string", // Группа
	  "Family":         "string", // Семеяйство
	  "Kind":           "string", // Вид
	  "Status":         "string", // Статус в красной книге
	  "Description":    "string", // Описние вида
	  "Habitat":        "string", // Ареал обитания
	  "Population":     1        // Численость популяции
}  
```
#### Response:
Success Response   
Status Code: 200 OK

### 5. Delete Species
DELETE "/species/:id"  
#### Description:
Удаляет вид по его id.
#### Parameters:

id (integer): id вида.
#### Response:
Success Response   
Status Code: 204 No Content
### Error Response
Status Code: 404 Not Found
Response Body: 
```json
{
  "error": "Species not found"
}
```