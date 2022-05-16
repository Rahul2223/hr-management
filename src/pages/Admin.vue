<template>

<q-page>
  <div id="q-app">
            <!-- create leave type -->
    <div class="q-pa-md q-gutter-sm">
      <q-table :data="data" :columns="columns" row-key="name" binary-state-sort>
        <template v-slot:top>
          <q-btn dense color="blue-grey-4" label="Create Leave" @click="show_dialog = true" no-caps></q-btn>          
            <div class="q-pa-sm q-gutter-sm">
              <q-dialog v-model="show_dialog">
                <q-card style="width: 70%">
                
                  <q-card-section>
                    <div class="text-h6">Add Leave!</div>
                  </q-card-section>

                  <q-card-section>
                    <div class="row">
                      <q-input type="text" v-model="editedItem.name" label="Leave Type"></q-input>
                      <q-input type="number" v-model="editedItem.years" label="Years"></q-input>
                      <q-input type="text" v-model="editedItem.maxi" label="Maximum Leave"></q-input>
                      <q-input type="text" v-model="editedItem.mini" label="Minimum Leave"></q-input>
                    </div>
                  </q-card-section>
          
                  <q-card-actions class="float-right">
                    <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div> 
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="desc" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="years" :props="props">
              {{ props.row.years }}
            </q-td>
            <q-td key="maxi" :props="props">
              <div class="text-pre-wrap">{{ props.row.maxi }}</div>
            </q-td>
            <q-td key="mini" :props="props">
              {{ props.row.mini }}
            </q-td>
            <q-td key="actions" :props="props">
              <q-icon class="q-ma-sm"  name="edit" size="sm" @click="editItem(props.row)"/>
              <q-icon class="q-ma-sm"  name="delete" size="sm" @click="deleteItem(props.row)"/>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

      <!-- add user  -->

    <div class="q-pa-md q-gutter-sm">
      <q-table title="Add User" :data="dataUser" :columns="columnsUser" row-key="nameUser" binary-state-sort>
        <template v-slot:top>
          <q-btn dense color="blue-grey-4" label="Add User" @click="show_dialogUser = true" no-caps></q-btn>
          
          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialogUser">
              <q-card>
                
                <q-card-section>
                  <div class="text-h6">Add User!</div>
                </q-card-section>

                <q-card-section>
                  <div class="row">
                    <q-input type="text" v-model="editedItemUser.userName" label="User Name"></q-input>
                    <q-input type="number" v-model="editedItemUser.userId" label="User Id"></q-input>
                    <q-input type="text" v-model="editedItemUser.designation" label="Designation"></q-input>
                  </div>
                </q-card-section>
          
                <q-card-actions class="float-right">
                  <q-btn flat label="OK" color="primary" v-close-popup @click="addRowUser" ></q-btn>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div> 
        </template>

        <template v-slot:body="propsUser">
          <q-tr :props="propsUser">
            <q-td key="users" :props="propsUser">
              {{ propsUser.row.userName }}
            </q-td>
            <q-td key="userId" :props="propsUser">
              {{ propsUser.row.userId }}
            </q-td>
            <q-td key="designation" :props="propsUser">
              <div class="text-pre-wrap">{{ propsUser.row.designation }}</div>
            </q-td>
  
            <q-td key="actionsUser" :props="propsUser">
              <q-icon class="q-ma-sm"  name="edit" size="sm" @click="editItemUser(propsUser.row)"/>
              <q-icon class="q-ma-sm"  name="delete" size="sm" @click="deleteItemUser(propsUser.row)"/>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>


          <!-- view all leave  -->
          <div class="q-pa-sm q-gutter-sm">
            <div class="row">
              <div class="col-12">
                <div class="q-pa-sm">
                  <div class="q-gutter-md" >
                    <div class="text-h6">View All</div>
                    <q-table
                      :data="dataView"
                      title=""
                      :columns="columnsView"
                      row-key="name"
                    />                   
                  </div>
                </div>
              </div>
            </div>
          </div>

  </div>
</q-page>
</template>

<script>
export default {
  name: 'Admin',
  methods: {
    addRow() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close()
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Are you want to delete this row?") &&
        this.data.splice(index, 1);
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
        // add user 
    addRowUser() {
      if (this.editedIndexUser > -1) {
        Object.assign(this.dataUser[this.editedIndexUser], this.editedItemUser);
      } else {
        this.dataUser.push(this.editedItemUser);
      }
      this.closeUser()
    },
    deleteItemUser(itemUser) {
      const index = this.dataUser.indexOf(itemUser);
      confirm("Are you want to delete this row?") &&
        this.dataUser.splice(index, 1);
    },
    editItemUser(itemUser) {
      this.editedIndexUser = this.dataUser.indexOf(itemUser);
      this.editedItemUser = Object.assign({}, itemUser);
      this.show_dialogUser = true;
    },
    closeUser () {
      this.show_dialogUser = false
      setTimeout(() => {
        this.editedItemUser = Object.assign({}, this.defaultItemUser)
        this.editedIndexUser = -1
      }, 300)
    }
  },
  data() {
    return {
      show_dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        years: 0,
        maxi: 0,
        mini: 0
      },
      defaultItem: {
        name: "",
        years: 0,
        maxi: 0,
        mini: 0
      },
      columns: [
        {
          name: "desc",
          required: true,
          label: "Leave Type",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "years",
          align: "center",
          label: "Years",
          field: "years",
          sortable: true
        },
        {
          name: "maxi",
          align: "center",
          label: "Maxi (Days)",
          field: "maxi",
          sortable: true,
          style: "width: 10px"
        },
        { 
          name: "mini", 
          align: "center",
          label: "Mini (Days)", 
          field: "mini" 
        },
       
        {
          name: "actions",
          align: "center",
          label: "Actions",
          field: "actions"
        }
      ],
      data: [
        {
          name: "Sick",
          years: 2020,
          maxi: 30,
          mini: 15,
        },
        {
          name: "Casual",
          years: 2020,
          maxi: 20,
          mini: 10,
        },
        {
          name: "Refreshment",
          years: 2020,
          maxi: 20,
          mini: 10
        },
        
      ],

      // add user 
      show_dialogUser: false,
      editedIndexUser: -1,
      editedItemUser: {
        userName: "",
        userId: 0,
        designation: ""
      },
      defaultItemUser: {
        userName: "",
        userId: 0,
        designation: ""
      },
      columnsUser: [
        {
          name: "users",
          required: true,
          label: "Username",
          align: "center",
          field: row => row.nameUser,
          // format: val => `${val}`,
          sortable: true
        },
        {
          name: "userId",
          align: "center",
          label: "User Id",
          field: "userId",
          sortable: true
        },
        {
          name: "designation",
          align: "center",
          label: "Designation",
          field: "designation",
          sortable: true,
          style: "width: 10px"
        },
        {
          name: "actionsUser",
          align: "center",
          label: "Actions",
          field: "actionsUser"
        }
      ],
      dataUser: [
        {
          userName: "Ram",
          userId: 3342,
          designation: "Lead"
        },
        {
          userName: "Sam",
          userId: 3127423,
          designation: "CEO"
        }
        
      ], 
      columnsView: [
        {
          name: "username",
          align: "center",
          label: "Username ",
          field: "username",
        },
        {
          name: "userId",
          align: "center",
          label: "User Id",
          field: "userId",
          sortable: true
        },
        {
          name: "leavetype",
          align: "center",
          label: "Leave Type",
          field: "leaveType",
        },
        {
          name: "period",
          align: "center",
          label: "Period (MM/DD/YYYY)",
          field: "period",
          sortable: true
        },
        { 
          name: "status",
          align: "center", 
          label: "Status", 
          field: "status" 
        },
      ],
      dataView: [
        {
          username: "Dan",
          userId: "55788",
          leaveType: "Sick",
          period: "12/10/2020 - 12/15/2020",
          status: "Approved"
        },
        {
          username: "Jam",
          userId: "202034",
          leaveType: "Casual",
          period: "11/10/2020 - 11/15/2020",
          status: "Pending"
        },
        {
          username: "Dan",
          userId: "55788",
          leaveType: "Sick",
          period: "12/10/2020 - 12/15/2020",
          status: "Approved"
        },
      ]
    };
  }
}
</script>

<style>

</style>