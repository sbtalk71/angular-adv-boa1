import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { User } from './user';

describe("Services test suit",()=>{

  let service:AuthService;
  

  beforeEach(()=>{
    TestBed.configureTestingModule({});
    service=TestBed.inject(AuthService)
  
  });

  it("should return true for service",()=>{
    expect(service).toBeTruthy();
  })

  it('should return data',()=>{
    const data=service.getData();
    expect(data).toContain('data');
  })
  it('should return data',()=>{
    let data:User;
    const resp=service.callApi();
    resp.subscribe(u=>data=u)
    expect(data!.name).toEqual('shantanu');
  })

})
