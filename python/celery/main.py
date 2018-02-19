from tasks import request

url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2'
result = request.delay(url)
response = result.get()

print(response.json())