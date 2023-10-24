from oauth2_provider.models import Application
from rest_framework.exceptions import  ParseError
import utils.errors as em
from rest_framework.views import APIView

class ApplicationBaseView(APIView):
    def initial(self, request, *args, **kwargs):
        super().initial(request, *args, **kwargs)
        data = request.data
        client_id = data.get('client_id', None)
        client_secret = data.get('client_secret', None)
        print(client_id, client_secret,data)
        if not client_secret or not client_secret:
            raise ParseError(em.EMPTY_FIELD('Client ID or Client secret'))
        try:
            app = Application.objects.get(client_id=client_id, client_secret=client_secret)
        except:
            raise ParseError(em.INVALID_FIELD_PARAMETER('Client ID or Client secret'))
        request.app = app