import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_urls = ['http://www.bbc.com']

    def parse(self, response):
        print response.css('body::text')

