+++
title= "Shortcodes"
weight= 1
+++

#

### Note

{{%note%}}**This is** an note !{{%/note%}}

### Code

{{%code%}}
hugo server
{{%/code%}}
{{%code%}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
    import javax.servlet.http.HttpServletRequest; 
    import javax.servlet.http.HttpServletResponse; 
    import com.catalyst.advanced.CatalystAdvancedIOHandler; 
    import com.zc.component.object.ZCObject; 
    import com.zc.component.object.ZCRowObject; 
    import com.zc.component.zcql.ZCQL; 
    import org.json.simple.JSONObject; 
    import org.json.simple.parser.JSONParser; 
    public class AlienCityAIO implements CatalystAdvancedIOHandler { 
        private static final Logger LOGGER = Logger.getLogger(AlienCityAIO.class.getName()); 
        private static String TABLENAME = “AlienCity”; 
        private static String COLUMNNAME = “CityName”; 
        JSONObject responseData = new JSONObject(); 
        static String GET = “GET”; 
        static String POST = “POST”;

        @Override 
        @SuppressWarnings(“unchecked”) 
        
        public void runner(HttpServletRequest request, HttpServletResponse response) throws Exception {
             try { 
                 //Fetches the endpoint and method to which the call was made 
                 String url = request.getRequestURI(); 
                 String method = request.getMethod(); 
                 //The GET API that checks the table for an alien encounter in that city 
                 if ((url.equals(“/alien”)) && method.equals(GET)) { 
                     String cityName = request.getParameter(“city_name”); 
                     //Queries the Catalyst Data Store table and checks whether a row is present for 
                     //the given city 
                     int length = getAlienCountFromCatalystDataStore(cityName); 
                     if (length > 0) { 
                         responseData.put(“message”, “Uh oh! Looks like there are aliens in this city!”); 
                         responseData.put(“signal”, “positive”); 
                     } 
                     else { 
                         responseData.put(“message”, “Hurray! No alien encounters in this city yet!”); 
                         responseData.put(“signal”, “negative”); 
                     } 
                 } 
                 //The POST API that reports the alien encounter for a particular city 
                 else if ((url.equals(“/alien”)) && method.equals(POST)) { 
                     //Gets the request body and parses it 
                     ServletInputStream requestBody = request.getInputStream(); 
                     JSONParser jsonParser = new JSONParser(); 
                     JSONObject jsonObject = (JSONObject) jsonParser.parse(new InputStreamReader(requestBody, “UTF-8”)); 
                     String cityName = (String) jsonObject.get("city_name"); 
                     //Queries the Catalyst Data Store table and checks whether a row is present for 
                     //the given city 
                     int length = getAlienCountFromCatalystDataStore(cityName); 
                     if (length > 0) { 
                         responseData.put("message", "Looks like you are not the first person to encounter aliens in this city! Someone has already reported an alien encounter here!"); 
                     } 
                     //If the row is not present, then a new row is inserted 
                     else { 
                         ZCRowObject row = ZCRowObject.getInstance(); 
                         row.set("CityName", cityName); 
                         ZCObject.getInstance().getTableInstance(TABLENAME).insertRow(row); 
                         responseData.put("message", "Thanks for reporting!"); 
                     }
                 } 
                 else {
                      //The actions are logged. You can check the logs from Catalyst Logs. 
                      LOGGER.log(Level.SEVERE, "Error. Invalid Request"); 
                      responseData.put("error", "Request Endpoint not found"); 
                      response.setStatus(404); 
                 } 
                 //Sends the response back to the Client 
                 response.setContentType("application/json"); 
                 response.getWriter().write(responseData.toString()); 
                 response.setStatus(200); 
             } 
             catch (Exception e) { 
                 //The actions are logged. You can check the logs from Catalyst Logs. 
                 LOGGER.log(Level.SEVERE, "Exception in AlienCityAIO", e); 
                 responseData.put("error", "Internal server error occurred. Please try again in some time."); 
                 response.getWriter().write(responseData.toString()); 
                 response.setStatus(500); 
             } 
         } 
         /** 
         * Checks whether an alien encounter is already reported for the given city by 
         * querying the Data Store table 
         * 
         * @param {*} catalystApp 
         * @param {*} cityName
         */ 
         private int getAlienCountFromCatalystDataStore(String cityName) throws Exception { 
             String query = "select * from " + TABLENAME + " where " + COLUMNNAME + " = " + cityName; 
             //Gets the ZCQL instance and executes query using the query string 
             ArrayList<ZCRowObject> rowList = ZCQL.getInstance().executeQuery(query); 
             return rowList.size(); 
         } 
     }
{{%/code%}}

### Table

| Component      | Event | Description |
| :--- | :---: | :---: |
| Data Store | Insert <br> checking for new line | Insert data in a table |
|            | Update | Update a table |
|            | Delete  | Delete a table |
| Cache      | Put     | Put data in a segment |

### Tabs

{{< tabs >}}
{{% tab "PHP" %}} 
Php allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{% /tab %}}
{{< tab "Golang" >}} 
Golang allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{< /tab >}}

{{< tab "Java" >}} 
Java allow you to highlight information or put it in a box. They create a colored box surrounding your text
{{< /tab >}}
{{< /tabs >}}


### Badge

{{% badge info %}}info{{% /badge %}}
{{% badge light %}}light{{% /badge %}}
{{% badge dark %}}dark{{% /badge %}}


### Expand

{{%expand 
question="How do I resolve the error “HTTP Error: 409 - The given function_name already exists”?" 
id="hello4" %}}
YAllow you to highlight information or put it in a box. They create a colored box surrounding your text{{% /expand%}}

### Panel with Adjustment

{{% panel_with_adjustment header="Lorem Ipsum is simply dummy text of the printing" footer="button" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
    import javax.servlet.http.HttpServletRequest; 
    import javax.servlet.http.HttpServletResponse; 
    import com.catalyst.advanced.CatalystAdvancedIOHandler; 
    import com.zc.component.object.ZCObject; 
    import com.zc.component.object.ZCRowObject; 
    import com.zc.component.zcql.ZCQL; 
    import org.json.simple.JSONObject; 
    import org.json.simple.parser.JSONParser; 
    public class AlienCityAIO implements CatalystAdvancedIOHandler { 
        private static final Logger LOGGER = Logger.getLogger(AlienCityAIO.class.getName()); 
        private static String TABLENAME = “AlienCity”; 
        private static String COLUMNNAME = “CityName”; 
        JSONObject responseData = new JSONObject(); 
        static String GET = “GET”; 
        static String POST = “POST”;

        @Override 
        @SuppressWarnings(“unchecked”) 
        
        public void runner(HttpServletRequest request, HttpServletResponse response) throws Exception {
             try { 
                 //Fetches the endpoint and method to which the call was made 
                 String url = request.getRequestURI(); 
                 String method = request.getMethod(); 
                 //The GET API that checks the table for an alien encounter in that city 
                 if ((url.equals(“/alien”)) && method.equals(GET)) { 
                     String cityName = request.getParameter(“city_name”); 
                     //Queries the Catalyst Data Store table and checks whether a row is present for 
                     //the given city 
                     int length = getAlienCountFromCatalystDataStore(cityName); 
                     if (length > 0) { 
                         responseData.put(“message”, “Uh oh! Looks like there are aliens in this city!”); 
                         responseData.put(“signal”, “positive”); 
                     } 
                     else { 
                         responseData.put(“message”, “Hurray! No alien encounters in this city yet!”); 
                         responseData.put(“signal”, “negative”); 
                     } 
                 } 
                 //The POST API that reports the alien encounter for a particular city 
                 else if ((url.equals(“/alien”)) && method.equals(POST)) { 
                     //Gets the request body and parses it 
                     ServletInputStream requestBody = request.getInputStream(); 
                     JSONParser jsonParser = new JSONParser(); 
                     JSONObject jsonObject = (JSONObject) jsonParser.parse(new InputStreamReader(requestBody, “UTF-8”)); 
                     String cityName = (String) jsonObject.get("city_name"); 
                     //Queries the Catalyst Data Store table and checks whether a row is present for 
                     //the given city 
                     int length = getAlienCountFromCatalystDataStore(cityName); 
                     if (length > 0) { 
                         responseData.put("message", "Looks like you are not the first person to encounter aliens in this city! Someone has already reported an alien encounter here!"); 
                     } 
                     //If the row is not present, then a new row is inserted 
                     else { 
                         ZCRowObject row = ZCRowObject.getInstance(); 
                         row.set("CityName", cityName); 
                         ZCObject.getInstance().getTableInstance(TABLENAME).insertRow(row); 
                         responseData.put("message", "Thanks for reporting!"); 
                     }
                 } 
                 else {
                      //The actions are logged. You can check the logs from Catalyst Logs. 
                      LOGGER.log(Level.SEVERE, "Error. Invalid Request"); 
                      responseData.put("error", "Request Endpoint not found"); 
                      response.setStatus(404); 
                 } 
                 //Sends the response back to the Client 
                 response.setContentType("application/json"); 
                 response.getWriter().write(responseData.toString()); 
                 response.setStatus(200); 
             } 
             catch (Exception e) { 
                 //The actions are logged. You can check the logs from Catalyst Logs. 
                 LOGGER.log(Level.SEVERE, "Exception in AlienCityAIO", e); 
                 responseData.put("error", "Internal server error occurred. Please try again in some time."); 
                 response.getWriter().write(responseData.toString()); 
                 response.setStatus(500); 
             } 
         } 
         /** 
         * Checks whether an alien encounter is already reported for the given city by 
         * querying the Data Store table 
         * 
         * @param {*} catalystApp 
         * @param {*} cityName
         */ 
         private int getAlienCountFromCatalystDataStore(String cityName) throws Exception { 
             String query = "select * from " + TABLENAME + " where " + COLUMNNAME + " = " + cityName; 
             //Gets the ZCQL instance and executes query using the query string 
             ArrayList<ZCRowObject> rowList = ZCQL.getInstance().executeQuery(query); 
             return rowList.size(); 
         } 
     }
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

{{% panel_with_adjustment header="Who invented the Light Bulb?" footer="button" %}}
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_with_adjustment %}}

### Button

{{%divtag red%}}Success{{%/divtag%}}
{{%divtag green%}}Success{{%/divtag%}}

### Columns

{{< columns >}}
#### Left Content
{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
    The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_without_adjustment %}}


<--->

#### Right Content
{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
    The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_without_adjustment %}}

{{< /columns >}}

### Panel without Adjustment

{{% panel_without_adjustment header="Who invented the Light Bulb?" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel_without_adjustment %}}

### Panel with Plane Content

{{% panel header="Who invented the Light Bulb?" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
   The story of the light bulb begins long before Edison patented the first commercially successful bulb in 1879. In 1800, Italian inventor Alessandro Volta developed the first practical method of generating electricity, the voltaic pile. Made of alternating discs of zinc and copper — interspersed with layers of cardboards soaked in salt water — the pile conducted electricity when a copper wire was connected at either end. While actually a predecessor of the modern battery, Volta's glowing copper wire is also considered to be one of the earliest manifestations of incandescent lighting.

    Not long after Volta presented his discovery of a continuous source of electricity to the Royal Society in London, Humphry Davy, an English chemist and inventor, produced the world's first electric lamp by connecting voltaic piles to charcoal electrodes. Davy's 1802 invention was known as an electric arc lamp, named for the bright arc of light emitted between its two carbon rods.
{{% /panel%}}

### Panel with Select

{{% precode id="java" key="firstone" %}}
    import java.io.InputStreamReader; 
    import java.util.ArrayList; 
    import java.util.logging.Level; 
    import java.util.logging.Logger; 
    import javax.servlet.ServletInputStream; 
    "project_details java1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="nodejs" key="firstone" %}}
    "project_details nodejs1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="python" key="firstone" %}}
    "project_details python1": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="java" key="secondone" %}}
    "project_details java2": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="nodejs" key="secondone" %}}
    "project_details nodejs2": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="python" key="secondone" %}}
    "project_details python2": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="java" key="thirdone" %}}
    "project_details java3": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="nodejs" key="thirdone" %}}
    "project_details nodejs3": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
{{% precode id="python" key="thirdone" %}}
    "project_details python3": {
        "id": 57127989012782,
        "project_name": "ShipmentTracking"
        },
        "event_bus_details": {
            "name": "Default",
            "id": 12083622901983
        }
{{%/ precode %}}
<!-- first one -->
{{%divtag%}}
{{% panel_with_select header="Who invented the Light Bulb?" key="firstone" %}}

{{% /panel_with_select %}}
{{%/divtag%}}
<!-- second one -->

{{% panel_with_select header="Who invented the Light Bulb?" key="secondone" %}}

{{% /panel_with_select %}}

<!-- third one -->

{{% panel_with_select header="Who invented the Light Bulb?" key="thirdone" %}}

{{% /panel_with_select %}}