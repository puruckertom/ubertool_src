# -*- coding: utf-8 -*-
import os
os.environ['DJANGO_SETTINGS_MODULE']='settings'
import webapp2 as webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
from uber import uber_lib

class webiceOutputPage(webapp.RequestHandler):
    def get(self):
        templatepath = os.path.dirname(__file__) + '/../templates/'
        ChkCookie = self.request.cookies.get("ubercookie")
        html = uber_lib.SkinChk(ChkCookie)
        html = html + template.render (templatepath + 'webiceSSD-jqueryOutput.html', {})
        html = html + template.render(templatepath + '02uberintroblock_wmodellinks.html',  {'model':'webice','page':'output'})
        html = html + template.render (templatepath + '03ubertext_links_left.html', {})                               
        html = html + template.render(templatepath + '04uberoutput_start.html', {
                'model':'webice', 
                'model_attributes':'Web-ICE v3.2.1 Output'})
        html = html + template.render (templatepath + 'webiceSSDOutput.html', {})
        html = html + template.render(templatepath + '04uberwebice_end.html', {})
        html = html + template.render(templatepath + '06uberfooter.html', {'links': ''})
        self.response.out.write(html)

app = webapp.WSGIApplication([('/.*', webiceOutputPage)], debug=True)

def main():
    run_wsgi_app(app)

if __name__ == '__main__':
    main()
