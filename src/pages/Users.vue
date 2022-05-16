<template>
  <q-page>
    <div id="q-app">

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
                    <div class="row q-gutter-md">
                      <q-input type="text" v-model="editedItem.ids" label="User id"></q-input>
                      <q-input type="text" v-model="editedItem.leave" label="Leave Type"></q-input>
                      <q-input type="text" v-model="editedItem.status" label="Status"></q-input>
                      <q-input type="date" v-model="editedItem.start" label="Start Date"></q-input>
                      <q-input type="date" v-model="editedItem.end" label="End Date"></q-input>
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
              <q-td key="ids" :props="props">
                {{ props.row.ids }}
              </q-td>
              <q-td key="leave" :props="props">
                <div class="text-pre-wrap">{{ props.row.leave }}</div>
              </q-td>
              <q-td key="status" :props="props">
                {{ props.row.status }}
              </q-td>
                  <!-- // date field  -->
              <q-td key="start" :props="props">
                {{ props.row.start }}
              </q-td>
              <q-td key="end" :props="props">
                {{ props.row.end }}
              </q-td>
              <q-td key="actions" :props="props">
                <q-icon class="q-ma-sm"  name="edit" size="sm" @click="editItem(props.row)"/>
                <q-icon class="q-ma-sm"  name="delete" size="sm" @click="deleteItem(props.row)"/>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
            <!-- leave application  -->
      <div class="q-pa-md q-gutter-sm">
        <q-card>
          <q-card-section>
            
            <div class="row">
              <div class="col-12">
                <div class="q-pa-md">
                  <div class="q-gutter-md">
                    <div class="text-h6">Leave Application</div>
                    <q-input autogrow v-model="applicationText"  type="textarea" />
                      <q-btn color="blue-grey-4" label="Send" />
                  </div>
                </div>
              </div>            
            </div>
              <!-- leave balance for him and show all leave with status -->
            <div class="row">
              <div class="col-12">
                <div class="q-pa-md">
                  <div class="q-gutter-md" >
                    <div class="text-h6">Leave Balance</div>
                    <q-table
                      :data="dataLeave"
                      title=""
                      :columns="columnsLeave"
                      row-key="name"
                    />                   
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'User',
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
    }
  },
  data() {
    return {
        text:'',
        applicationText: '',

      show_dialog: false,
      editedIndex: -1,
      editedItem: {
        ids: 0,
        leave: "",
        status: "",
        start: "",
        end: ""
      },
      defaultItem: {
        ids: 0,
        leave: "",
        status: "",
        start: "",
        end: ""
      },
      columns: [
        {
          name: "ids",
          align: "center",
          label: "User Id",
          field: "ids",
          sortable: true
        },
        {
          name: "leave",
          align: "center",
          label: "Leave Type",
          field: "leave",
          sortable: true,
          style: "width: 10px"
        },
        { 
          name: "status",
          align: "center", 
          label: "Status", 
          field: "status" 
        },
        { 
          name: "start",
          align: "center", 
          label: "Start Date", 
          field: "start" 
        },
        { 
          name: "end",
          align: "center",
          label: "End Date", 
          field: "end"
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
          ids: 23355,
          leave: "Casual",
          status: "Approved",
          start: "12/11/2020",
          end: "12/16/2020"
        },
        {
          ids: 23355,
          leave: "Sick",
          status: "Pending",
          start: "10/19/2021",
          end: "10/25/2021"
        },
        {
          ids: 23355,
          leave: "Travel",
          status: "Reject",
          start: "9/25/2020",
          end: "9/29/2020"
        },
        
      ],
      columnsLeave: [
        {
          name: "leavetype",
          align: "center",
          label: "Leave Type",
          field: "leaveType",
        },
        {
          name: "allotted",
          align: "center",
          label: "Allotted (Days)",
          field: "allotted",
        },
        {
          name: "remaining",
          align: "center",
          label: "Remaining (Days)",
          field: "remaining",
        }
      ],
      dataLeave: [
        {
          leaveType: "Sick",
          allotted: 20,
          remaining: 10
        },
        {
          leaveType: "Casual",
          allotted: 15,
          remaining: 7
        },
        {
          leaveType: "Tour",
          allotted: 10,
          remaining: 5
        },
      ]
    };
  }
}
</script>

<style>

</style>