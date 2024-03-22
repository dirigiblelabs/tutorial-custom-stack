package io.dirigible.samples.api.domain;

import java.util.Date;

public class SubExample {

	private Date date;

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public SubExample withDate(Date date) {
		setDate(date);
		return this;
	}
}
