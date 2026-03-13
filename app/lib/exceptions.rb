module Exceptions
    class ApplicationError < StandardError; end
    class NotFound < ApplicationError; end
    class InvalidParams < ApplicationError; end
  end