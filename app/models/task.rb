class Task < ApplicationRecord
    validates :title, presence: true, length: { minimum: 3, maximum: 255 }
  
    scope :done, -> { where(done: true) }
    scope :pending, -> { where(done: false) }
  
    def self.filter_by_status(status)
      case status
      when "true"  then done
      when "false" then pending
      else all
      end
    end
  end