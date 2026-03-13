class Api::V1::TasksController < ApplicationController
    before_action :set_task, only: %i[show update destroy]
  
    def index
        @tasks = Task.filter_by_status(params[:done])
                     .order(created_at: :desc)
                     .page(params[:page])
                     .per(params[:per_page] || 10)
      
        render json: {
          tasks: @tasks,
          meta: {
            current_page: @tasks.current_page,
            total_pages: @tasks.total_pages,
            total_count: @tasks.total_count,
            per_page: @tasks.limit_value
          }
        }
    end
  
    def show
      render json: @task
    end
  
    def create
        @task = Task.new(task_params)
        @task.save!
        render json: @task, status: :created
    end
  
    def update
        @task.update!(task_params)
        render json: @task
    end
  
    def destroy
      @task.destroy
      head :no_content
    end
  
    private
  
    def set_task
        @task = Task.find(params[:id])
      end
    
      def task_params
        params.require(:task).permit(:title, :done)
      end
  end