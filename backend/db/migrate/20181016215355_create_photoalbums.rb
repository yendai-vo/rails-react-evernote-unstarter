class CreatePhotoalbums < ActiveRecord::Migration[5.2]
  def change
    create_table :photoalbums do |t|
      t.belongs_to :album
      t.belongs_to :photo

      t.timestamps
    end
  end
end
