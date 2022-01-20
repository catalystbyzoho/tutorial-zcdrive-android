+++
title= "Shortcodes"
description= "The Data Store in Catalyst is a cloud-based relational database management system which stores the persistent data of your application. This data repository includes the data from the application’s backend and the data of the application’s end users."
tags = [ "Description", "Common operations", "Instance methods" ]
weight= 1
+++

#

{{%announcement%}}You are using old version of SDK to get lattest version {{%span id="java"%}}{{%/span%}} {{%link href="#" target="_self" %}}click here{{%/link%}}{{%/announcement%}}

### Note

{{%note%}}This is an note !{{%/note%}}

### Code

{{%code lang="java"%}}hugo server{{%/code%}}
{{%code lang="java" scroll="set-scroll" %}}import java.io.InputStreamReader; 
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
}{{%/code%}}

### Table
{{%divtag class="table-width"%}}

| Component      | Event | Description |
| :--- | :---: | :---: |
| Data Store | Insert <br> checking for new line | Insert data in a table |
|            | Update | Update a table |
|            | Delete  | Delete a table |
| Cache      | Put     | Put data in a segment |

{{%/divtag%}}

<table style="width:100%">
  <tr>
    <th>Attributes</th>
    <th>Data Type</th>
    <th>Mandatory</th>
    <th>Description</th>
  </tr>
    <tr>
    <td>table_identifier</td>
    <td>String</td>
    <td>Yes</td>
    <td>The unique ID of the table or the table name. You can obtain the table ID from Data Store or from the URL when the table is opened in the console.</td>
  </tr>
  <tr>
    <td>query</td>
    <td>JSON</td>
    <td>No</td>
    <td>The section where you can define the conditions and criteria for the bulk read job</td>
  </tr>
  <tr>
    <td>criteria<br/><span class="table-props">Show properties</span></td>
    <td>JSON</td>
    <td>No</td>
    <td>A set of conditions based on which the records will be fetched</td>
  </tr>
  <tr class="hide-table-props">
  	<td colspan="4" style="padding: 20px;">
      <table class="inner-table">
        <tr>
            <th>Attributes</th>
            <th>Data Type</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
            <tr>
            <td>table_identifier</td>
            <td>String</td>
            <td>Yes</td>
            <td>The unique ID of the table or the table name. You can obtain the table ID from Data Store or from the URL when the table is opened in the console.</td>
        </tr>
        <tr>
            <td>query</td>
            <td>JSON</td>
            <td>No</td>
            <td>The section where you can define the conditions and criteria for the bulk read job</td>
        </tr>
        <tr>
            <td>criteria<br/><span>Show properties</span></td>
            <td>JSON</td>
            <td>No</td>
            <td>A set of conditions based on which the records will be fetched</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>callback</td>
    <td>JSON</td>
    <td>NO</td>
    <td>The section where you can define the properties of the callback URL, where automatic JSON responses of the job statuses will be sent to</td>
  </tr>
</table>

### Badge

{{% badge %}}info{{% /badge %}}
{{% badge %}}light{{% /badge %}}
{{% badge %}}dark{{% /badge %}}


### Expand

{{%expand 
question="How do I resolve the error “HTTP Error: 409 - The given function_name already exists”?" 
id="hello4" %}}
YAllow you to highlight information or put it in a box. They create a colored box surrounding your text{{% /expand%}}

### Panel with Adjustment

{{% panel_with_adjustment header="Lorem Ipsum is simply dummy text of the printing" lang="java" scroll="set-scroll" %}}import java.io.InputStreamReader; 
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
}{{% /panel_with_adjustment %}}

### Panel without Adjustment

{{% panel_without_adjustment header="Who invented the Light Bulb?" lang="java" %}}import java.io.InputStreamReader; 
import java.util.ArrayList; 
import java.util.logging.Level; 
import java.util.logging.Logger; 
import javax.servlet.ServletInputStream; {{% /panel_without_adjustment %}}

### Panel with Plane Content

{{% panel header="Who invented the Light Bulb?" lang="java" %}}import java.io.InputStreamReader; 
import java.util.ArrayList; 
import java.util.logging.Level; 
import java.util.logging.Logger; 
import javax.servlet.ServletInputStream; {{% /panel%}}

### Panel with Select
#### Without Scroll
{{% panel_with_select header="Who invented the Light Bulb?" lang="java" %}}
{{% divtag id="Java" %}}
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
    }{{% /divtag %}} 
{{% divtag id="NodeJS" %}}
    import NodeJS.key1.util.ArrayList; 
    import NodeJS.key1.util.logging.Level; 
    import NodeJS.key1.util.logging.Logger; 
    import NodeJSx.key1.servlet.ServletInputStream;{{% /divtag %}} 
{{% divtag id="Python" %}}
    import Python.key1.util.ArrayList; 
    import Python.key1.util.logging.Level; 
    import Python.key1.util.logging.Logger; 
    import Pythonx.key1.servlet.ServletInputStream;{{% /divtag %}} 
{{% /panel_with_select %}}
#### With Scroll
{{% panel_with_select header="Who invented the Light Bulb?" scroll="set-scroll" lang="java" %}}
{{% divtag id="Java" %}}
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
    {{% /divtag %}} 
{{% divtag id="NodeJS" %}}
    import NodeJS.key2.util.ArrayList; 
    import NodeJS.key2.util.logging.Level; 
    import NodeJS.key2.util.logging.Logger; 
    import NodeJSx.key2.servlet.ServletInputStream;
    {{% /divtag %}} 
{{% divtag id="Python" %}}
    import Python.key2.util.ArrayList; 
    import Python.key2.util.logging.Level; 
    import Python.key2.util.logging.Logger; 
    import Pythonx.key2.servlet.ServletInputStream;
    {{% /divtag %}} 
{{% /panel_with_select %}}

### Panel with Import

{{% import header="Imports for Lorem ipsum" lang="java" %}}import java.io.InputStreamReader; 
import java.util.ArrayList; 
import java.util.logging.Level; 
import java.util.logging.Logger; 
import javax.servlet.ServletInputStream; {{% /import %}}