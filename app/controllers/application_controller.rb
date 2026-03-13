class ApplicationController < ActionController::API
    rescue_from Exceptions::NotFound, with: :not_found
    rescue_from Exceptions::InvalidParams, with: :invalid_params
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_params
  
    private
  
    def not_found(exception)
      render json: { error: exception.message }, status: :not_found
    end
  
    def invalid_params(exception)
      render json: { errors: exception.message }, status: :unprocessable_entity
    end
  end