from rest_framework.pagination import LimitOffsetPagination

class DefaultPagination(LimitOffsetPagination):
    default_limit = 12
    limit_query_param = 'limit'
    offset_query_param = 'offset'
    template = 'rest_framework/pagination/numbers.html'
    def update_limit(self,limit):
        self.default_limit = limit
    # template = 'rest_framework/pagination/previous_and_next.html'
    
