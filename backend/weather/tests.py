from django.test import TestCase

# Create your tests here.
class TestCalls(APITestCase):

    def setUp(self):

        self.session = self.client.session
        self.request = self.client.post(
            reverse("input", args=["list"]), {"word_list": words}, format="json"
        )
        self.request.session = {}