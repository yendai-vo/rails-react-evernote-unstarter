class ApplicationController < ActionController::API
    def get_image_url
        -> (image) do
          begin
            url_for(image)
          rescue Module::DelegationError
            ""
          end
        end
      end
    
end
