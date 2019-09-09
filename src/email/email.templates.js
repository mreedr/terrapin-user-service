import inlineCss from 'inline-css'

let css = `
<style type="text/css">
/* CLIENT-SPECIFIC STYLES */
#outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */

/* RESET STYLES */
body{margin:0; padding:0;}
img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
table{border-collapse:collapse !important;}
body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}

/* TEMPLATE STYLES */

/* ========== Page Styles ========== */

#bodyCell{padding:20px;}
#templateContainer{width:600px; font-family: Helvetica;}

/**
* @tab Page
* @section background style
* @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
* @theme page
*/
body, #bodyTable{
/*@editable*/ background-color:#DEE0E2;
}

/**
* @tab Page
* @section background style
* @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
* @theme page
*/
#bodyCell{
/*@editable*/ border-top:4px solid #BBBBBB;
}

/**
* @tab Page
* @section email border
* @tip Set the border for your email.
*/
#templateContainer{
/*@editable*/ border:1px solid #BBBBBB;
}

/**
* @tab Page
* @section heading 1
* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
* @style heading 1
*/
h1{
/*@editable*/ color:#202020 !important;
display:block;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:26px;
/*@editable*/ font-style:normal;
/*@editable*/ font-weight:bold;
/*@editable*/ line-height:100%;
/*@editable*/ letter-spacing:normal;
margin-top:0;
margin-right:0;
margin-bottom:10px;
margin-left:0;
/*@editable*/ text-align:left;
}

/**
* @tab Page
* @section heading 2
* @tip Set the styling for all second-level headings in your emails.
* @style heading 2
*/
h2{
/*@editable*/ color:#404040 !important;
display:block;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:20px;
/*@editable*/ font-style:normal;
/*@editable*/ font-weight:bold;
/*@editable*/ line-height:100%;
/*@editable*/ letter-spacing:normal;
margin-top:0;
margin-right:0;
margin-bottom:10px;
margin-left:0;
/*@editable*/ text-align:left;
}

/**
* @tab Page
* @section heading 3
* @tip Set the styling for all third-level headings in your emails.
* @style heading 3
*/
h3{
/*@editable*/ color:#606060 !important;
display:block;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:16px;
/*@editable*/ font-weight:normal;
/*@editable*/ line-height:100%;
/*@editable*/ letter-spacing:normal;
margin-top:0;
margin-right:0;
margin-bottom:10px;
margin-left:0;
/*@editable*/ text-align:left;
}

/**
* @tab Page
* @section heading 4
* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
* @style heading 4
*/
h4{
/*@editable*/ color:#808080 !important;
display:block;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:14px;
/*@editable*/ font-style:italic;
/*@editable*/ font-weight:normal;
/*@editable*/ line-height:100%;
/*@editable*/ letter-spacing:normal;
margin-top:0;
margin-right:0;
margin-bottom:10px;
margin-left:0;
/*@editable*/ text-align:left;
}

/* Table Styles */

table.order-table {
width: 100%;
display: table;
border-collapse: collapse;
border-spacing: 0;
padding: 15px;
}



td.name-column, th.order {
padding: 15px 5px;
display: table-cell;
text-align: left;
vertical-align: middle;
border-radius: 2px;
}

.order-details-header {
background: #e1e2e1;
}

.service-fee, .order-details-rows, .card-fee, {
border-bottom: 1px solid rgba(0,0,0,.12);
}

/* ========== Header Styles ========== */

/**
* @tab Header
* @section preheader style
* @tip Set the background color and bottom border for your email's preheader area.
* @theme header
*/
#templatePreheader{
/*@editable*/ background-color:#F4F4F4;
/*@editable*/ border-bottom:1px solid #CCCCCC;
}

/**
* @tab Header
* @section preheader text
* @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
*/
.preheaderContent{
/*@editable*/ color:#808080;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:10px;
/*@editable*/ line-height:125%;
/*@editable*/ text-align:left;
}

/**
* @tab Header
* @section preheader link
* @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
*/
.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{
/*@editable*/ color:#606060;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

/**
* @tab Header
* @section header style
* @tip Set the background color and borders for your email's header area.
* @theme header
*/
#templateHeader{
/*@editable*/ background-color:#149739;
/*@editable border-top:1px solid #FFFFFF; */
/*@editable border-bottom:1px solid #CCCCCC; */
}

/**
* @tab Header
* @section header text
* @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
*/
.headerContent{
/*@editable*/ color:#505050;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:20px;
/*@editable*/ font-weight:bold;
/*@editable*/ line-height:100%;
/*@editable*/ padding-top:25px;
/*@editable*/ padding-right:25px;
/*@editable*/ padding-bottom:25px;
/*@editable*/ padding-left:25px;
/*@editable*/ text-align:left;
/*@editable*/ vertical-align:middle;
}

/**
* @tab Header
* @section header link
* @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
*/
.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{
/*@editable*/ color:#EB4102;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

#headerImage{
height:auto;
max-width:600px;
}

/* ========== Body Styles ========== */

/**
* @tab Body
* @section body style
* @tip Set the background color and borders for your email's body area.
*/
#templateBody{
/*@editable*/ background-color:#F4F4F4;
/*@editable*/ border-top:1px solid #FFFFFF;
/*@editable*/ border-bottom:1px solid #CCCCCC;
}

/**
* @tab Body
* @section body text
* @tip Set the styling for your email's main content text. Choose a size and color that is easy to read.
* @theme main
*/
.bodyContent{
/*@editable*/ color:#505050;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:16px;
/*@editable*/ line-height:150%;
padding-top:20px;
padding-right:20px;
padding-bottom:20px;
padding-left:20px;
/*@editable*/ text-align:left;
}

/**
* @tab Body
* @section body link
* @tip Set the styling for your email's main content links. Choose a color that helps them stand out from your text.
*/
.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{
/*@editable*/ color:#EB4102;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

.bodyContent img{
display:inline;
height:auto;
max-width:560px;
}

.subtext {
font-size: 12px;
}

.btn {
cursor: pointer;
display: inline-block;
overflow: hidden;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-tap-highlight-color: transparent;
vertical-align: middle;
z-index: 1;
transition: .3s ease-out;
text-decoration: none !important;
color: #fff !important;
background-color: #093;
border: none;
border-radius: 2px;
padding: 15px;
font-size: 2rem !important;
margin: 0 auto !important;
box-shadow: 0 3px 3px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2);
}

/* ========== Column Styles ========== */

.templateColumnContainer{display:inline; width:260px;}

/**
* @tab Columns
* @section column style
* @tip Set the background color and borders for your email's column area.
*/
#templateColumns{
/*@editable*/ background-color:#F4F4F4;
/*@editable*/ border-top: 1px solid hsla(0,0%,63%,.2);
/*@editable border-bottom:1px solid #CCCCCC; */
}

/**
* @tab Columns
* @section left column text
* @tip Set the styling for your email's left column content text. Choose a size and color that is easy to read.
*/
.leftColumnContent{
/*@editable*/ color:#505050;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:14px;
/*@editable*/ line-height:150%;
padding-top:0;
padding-right:0;
padding-bottom:20px;
padding-left:0;
/*@editable*/ text-align:left;
}

/**
* @tab Columns
* @section left column link
* @tip Set the styling for your email's left column content links. Choose a color that helps them stand out from your text.
*/
.leftColumnContent a:link, .leftColumnContent a:visited, /* Yahoo! Mail Override */ .leftColumnContent a .yshortcuts /* Yahoo! Mail Override */{
/*@editable*/ color:#EB4102;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

/**
* @tab Columns
* @section right column text
* @tip Set the styling for your email's right column content text. Choose a size and color that is easy to read.
*/
.rightColumnContent{
/*@editable*/ color:#505050;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:14px;
/*@editable*/ line-height:150%;
padding-top:0;
padding-right:0;
padding-bottom:20px;
padding-left:0;
/*@editable*/ text-align:left;
}

/**
* @tab Columns
* @section right column link
* @tip Set the styling for your email's right column content links. Choose a color that helps them stand out from your text.
*/
.rightColumnContent a:link, .rightColumnContent a:visited, /* Yahoo! Mail Override */ .rightColumnContent a .yshortcuts /* Yahoo! Mail Override */{
/*@editable*/ color:#EB4102;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

.leftColumnContent img, .rightColumnContent img{
display:inline;
height:auto;
max-width:260px;
}

.card-action {
display: flex;
flex-direction: row;
border-top: 1px solid hsla(0,0%,63%,.2);
padding: 15px 15px;
}

.card-action a {
flex: 1;
color: #ffab40;
transition: color .3s ease;
text-transform: uppercase;
text-decoration: none;
}

/* ========== Footer Styles ========== */

/**
* @tab Footer
* @section footer style
* @tip Set the background color and borders for your email's footer area.
* @theme footer
*/
#templateFooter{
/*@editable*/ background-color:#F4F4F4;
/*@editable border-top: 1px solid hsla(0,0%,63%,.2); */
}

/**
* @tab Footer
* @section footer text
* @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
* @theme footer
*/
.footerContent{
/*@editable*/ color:#808080;
/*@editable*/ font-family:Helvetica;
/*@editable*/ font-size:10px;
/*@editable*/ line-height:150%;
padding-top:20px;
padding-right:20px;
padding-bottom:20px;
padding-left:20px;
/*@editable*/ text-align:left;
}

/**
* @tab Footer
* @section footer link
* @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
*/
.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{
/*@editable*/ color:#606060;
/*@editable*/ font-weight:normal;
/*@editable*/ text-decoration:underline;
}

/*  MOBILE STYLES  */

    @media only screen and (max-width: 480px){
/*  CLIENT-SPECIFIC MOBILE STYLES  */
body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
        body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

/*  MOBILE RESET STYLES  */
#bodyCell{padding:10px !important;}

/*  MOBILE TEMPLATE STYLES  */

/* ======== Page Styles ======== */

/**
* @tab Mobile Styles
* @section template width
* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn't work for you, set the width to 300px instead.
*/
#templateContainer{
  max-width:600px !important;
  /*@editable*/ width:100% !important;
}

/**
* @tab Mobile Styles
* @section heading 1
* @tip Make the first-level headings larger in size for better readability on small screens.
*/
h1{
  /*@editable*/ font-size:24px !important;
  /*@editable*/ line-height:100% !important;
}

/**
* @tab Mobile Styles
* @section heading 2
* @tip Make the second-level headings larger in size for better readability on small screens.
*/
h2{
  /*@editable*/ font-size:20px !important;
  /*@editable*/ line-height:100% !important;
}

/**
* @tab Mobile Styles
* @section heading 3
* @tip Make the third-level headings larger in size for better readability on small screens.
*/
h3{
  /*@editable*/ font-size:18px !important;
  /*@editable*/ line-height:100% !important;
}

/**
* @tab Mobile Styles
* @section heading 4
* @tip Make the fourth-level headings larger in size for better readability on small screens.
*/
h4{
  /*@editable*/ font-size:16px !important;
  /*@editable*/ line-height:100% !important;
}

/* ======== Header Styles ======== */

#templatePreheader{display:none !important;} /* Hide the template preheader to save space */

/**
* @tab Mobile Styles
* @section header image
* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image's original width as the max-width. If a fluid setting doesn't work, set the image width to half its original size instead.
*/
#headerImage{
  height:auto !important;
  /*@editable*/ max-width:600px !important;
  /*@editable*/ width:100% !important;
}

/**
* @tab Mobile Styles
* @section header text
* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
*/
.headerContent{
  /*@editable*/ font-size:20px !important;
  /*@editable*/ line-height:125% !important;
}

/* ======== Body Styles ======== */

/**
* @tab Mobile Styles
* @section body image
* @tip Make the main body image fluid for portrait or landscape view adaptability, and set the image's original width as the max-width. If a fluid setting doesn't work, set the image width to half its original size instead.
*/
#bodyImage{
  height:auto !important;
  /*@editable*/ max-width:560px !important;
  /*@editable*/ width:100% !important;
}

/**
* @tab Mobile Styles
* @section body text
* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
*/
.bodyContent{
  /*@editable*/ font-size:18px !important;
  /*@editable*/ line-height:125% !important;
}

/* ======== Column Styles ======== */

.templateColumnContainer{display:block !important; width:100% !important;}

/**
* @tab Mobile Styles
* @section column image
* @tip Make the column image fluid for portrait or landscape view adaptability, and set the image's original width as the max-width. If a fluid setting doesn't work, set the image width to half its original size instead.
*/
.columnImage{
  height:auto !important;
  /*@editable*/ max-width:260px !important;
  /*@editable*/ width:100% !important;
}

/**
* @tab Mobile Styles
* @section left column text
* @tip Make the left column content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
*/
.leftColumnContent{
  /*@editable*/ font-size:16px !important;
  /*@editable*/ line-height:125% !important;
}

/**
* @tab Mobile Styles
* @section right column text
* @tip Make the right column content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
*/
.rightColumnContent{
  /*@editable*/ font-size:16px !important;
  /*@editable*/ line-height:125% !important;
}

/* ======== Footer Styles ======== */

/**
* @tab Mobile Styles
* @section footer text
* @tip Make the body content text larger in size for better readability on small screens.
*/
.footerContent{
  /*@editable*/ font-size:14px !important;
  /*@editable*/ line-height:115% !important;
}

.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
}
</style>
`


export default async(emailHTML, previewText) => {
  let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>*|MC:SUBJECT|*</title>

    </head>
    <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    	<center>
        	<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            	<tr>
                	<td align="center" valign="top" id="bodyCell">
                    	<!-- BEGIN TEMPLATE // -->
                    	<table border="0" cellpadding="0" cellspacing="0" id="templateContainer">
                        	<tr>
                            	<td align="center" valign="top">
                                	<!-- BEGIN PREHEADER // -->
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
                                        <tr>
                                            <td valign="top" class="preheaderContent" style="padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;">
                                                ${previewText}
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // END PREHEADER -->
                                </td>
                            </tr>
                        	<tr>
                            	<td align="center" valign="top">
                                	<!-- BEGIN HEADER // -->
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateHeader">
                                        <tr>
                                            <td valign="top" class="headerContent">
                                            	<img src="https://terrapinticketing.com/img/tt-logo-white.svg" width="100%" id="headerImage"/>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // END HEADER -->
                                </td>
                            </tr>
                        	<tr>
                            	<td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                                	<!-- BEGIN BODY // -->
                                    ${emailHTML}
                                  <!-- // END BODY -->
                                </table>
                              </td>
                            </tr>
                        	<tr>
                            	<td align="center" valign="top">
                                	<!-- BEGIN FOOTER // -->
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
                                        <tr>
                                            <td valign="top" class="footerContent" style="padding-top:0; text-align: center;" mc:edit="footer_content01">
                                              <br />
                                              If you experience any issues or have questions about an order, please email at info@terrapinticketing.com. <br />
                                              For urgent matters, call (708) 805-9743. <br /><br />

                                              Terrapin Ticketing <br />
                                              1311 Vine Street <br />
                                              Cincinnati, OH 45202 <br /><br />
                                              © 2018 Terrapin Ticketing. All rights reserved.
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // END FOOTER -->
                                </td>
                            </tr>
                        </table>
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>
`
  let email = await inlineCss(html, { extraCss: css, url: 'https://google.com' })
  return email
}
