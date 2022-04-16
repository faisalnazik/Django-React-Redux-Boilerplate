from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse, reverse_lazy


@api_view(['GET'])
def api_root(request):
    ''' Single entry point to mumble API (Does not include dynamic urls)'''

    return Response({
        # users endpoints
        'users': reverse('users-api:users', request=request),
    })
